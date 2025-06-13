// RGB: { r: number, g: number, b: number }
// HSL: { h: number, s: number, l: number }

const componentToHex = (c) => {
  const hex = c.toString(16)
  return hex.length === 1 ? `0${hex}` : hex
}

const expandHex = (hex) => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hex = hex.replace(shorthandRegex, (_m, r, g, b) => {
    return r + r + g + g + b + b
  })

  return `#${hex.replace("#", "")}`
}

const hexToRGB = (hex) => {
  hex = expandHex(hex)
  hex = hex.replace("#", "")
  const intValue = parseInt(hex, 16)

  return {
    r: (intValue >> 16) & 255,
    g: (intValue >> 8) & 255,
    b: intValue & 255,
  }
}

const hslToRGB = ({ h, s, l }) => {
  h = h / 360
  s = s / 100
  l = l / 100
  if (s === 0) {
    l = Math.round(l * 255)
    return { r: l, g: l, b: l }
  }

  const hue2rgb = (p, q, t) => {
    if (t < 0) t += 1
    if (t > 1) t -= 1
    if (t < 1 / 6) return p + (q - p) * 6 * t
    if (t < 1 / 2) return q
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
    return p
  }

  const q = l < 0.5 ? l * (1 + s) : l + s - l * s
  const p = 2 * l - q
  const r = hue2rgb(p, q, h + 1 / 3)
  const g = hue2rgb(p, q, h)
  const b = hue2rgb(p, q, h - 1 / 3)

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  }
}

const mixColors = (color, mixColor, weight = 0.5) => {
  const colorRGB = color.rgb
  const mixColorRGB = mixColor.rgb
  const mixColorWeight = 1 - weight

  return {
    r: Math.round(weight * mixColorRGB.r + mixColorWeight * colorRGB.r),
    g: Math.round(weight * mixColorRGB.g + mixColorWeight * colorRGB.g),
    b: Math.round(weight * mixColorRGB.b + mixColorWeight * colorRGB.b),
  }
}

const rgbToHex = ({ r, g, b }) => {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b)
}

const rgbToHSL = ({ r, g, b }) => {
  r = Math.max(Math.min(r / 255, 1), 0)
  g = Math.max(Math.min(g / 255, 1), 0)
  b = Math.max(Math.min(b / 255, 1), 0)
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const l = Math.min(1, Math.max(0, (max + min) / 2))
  let d, h, s

  if (max !== min) {
    d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    if (max === r) {
      h = (g - b) / d + (g < b ? 6 : 0)
    } else if (max === g) {
      h = (b - r) / d + 2
    } else {
      h = (r - g) / d + 4
    }
    h = h / 6
  } else {
    h = s = 0
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  }
}

const rgbToYIQ = ({ r, g, b }) => {
  return (r * 299 + g * 587 + b * 114) / 1000
}

const RED = 0.2126
const GREEN = 0.7152
const BLUE = 0.0722
const GAMMA = 2.4

const luminance = ({ r, g, b }) => {
  const a = [r, g, b].map((v) => {
    v /= 255
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, GAMMA)
  })
  return a[0] * RED + a[1] * GREEN + a[2] * BLUE
}

const contrast = (rgb1, rgb2) => {
  const lum1 = luminance(rgb1)
  const lum2 = luminance(rgb2)
  const brightest = Math.max(lum1, lum2)
  const darkest = Math.min(lum1, lum2)
  return (brightest + 0.05) / (darkest + 0.05)
}

class Color {
  constructor(value) {
    if (typeof value === "string" && /rgb\(/.test(value)) {
      const matches =
        /rgb\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)/.exec(value) || []
      value = {
        r: parseInt(matches[1], 10),
        g: parseInt(matches[2], 10),
        b: parseInt(matches[3], 10),
      }
    } else if (typeof value === "string" && /hsl\(/.test(value)) {
      const matches =
        /hsl\((\d{1,3}), ?(\d{1,3})%, ?(\d{1,3})%\)/.exec(value) || []
      value = {
        h: parseInt(matches[1], 10),
        s: parseInt(matches[2], 10),
        l: parseInt(matches[3], 10),
      }
    }

    if (typeof value === "string") {
      value = value.replace(/\s/g, "")
      this.hex = expandHex(value)
      this.rgb = hexToRGB(this.hex)
      this.hsl = rgbToHSL(this.rgb)
    } else if ("r" in value && "g" in value && "b" in value) {
      this.rgb = value
      this.hex = rgbToHex(this.rgb)
      this.hsl = rgbToHSL(this.rgb)
    } else if ("h" in value && "s" in value && "l" in value) {
      this.hsl = value
      this.rgb = hslToRGB(this.hsl)
      this.hex = rgbToHex(this.rgb)
    } else {
      throw new Error("Incorrect value passed.")
    }

    this.yiq = rgbToYIQ(this.rgb)
  }

  static isColor(value) {
    if (/rgb\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)/.test(value)) {
      return true
    }
    return /(^#[0-9a-fA-F]+)/.test(value.trim())
  }

  contrast() {
    const blackContrastRatio = contrast(this.rgb, { r: 0, g: 0, b: 0 })
    const whiteContrastRatio = contrast(this.rgb, { r: 255, g: 255, b: 255 })

    return new Color(blackContrastRatio >= whiteContrastRatio ? "#000" : "#fff")
  }

  mix(from, amount = 0.5) {
    const base = from instanceof Color ? from : new Color(from)
    return new Color(mixColors(this, base, amount))
  }

  shade(weight = 0.12) {
    return this.mix({ r: 0, g: 0, b: 0 }, weight)
  }

  tint(weight = 0.1) {
    return this.mix({ r: 255, g: 255, b: 255 }, weight)
  }

  toList() {
    const { r, g, b } = this.rgb
    return `${r},${g},${b}`
  }
}

// Export for module environments
if (typeof module !== "undefined") {
  module.exports = {
    Color,
    expandHex,
    hexToRGB,
    rgbToHex,
    rgbToHSL,
    hslToRGB,
    contrast,
    luminance,
  }
}
