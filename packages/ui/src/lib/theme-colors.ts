import { Platform, useColorScheme } from "react-native"

// Mirrors the CSS palettes in apps/mobile/global.css for props that take a raw
// color string (icon `color`, `placeholderTextColor`, navigator options).
const dark = {
	background: "#0A0F1C",
	surface: "#0F172A",
	card: "#1E293B",
	border: "#1E293B",
	foreground: "#FFFFFF",
	primary: "#22D3EE",
	primaryForeground: "#0A0F1C",
	textSecondary: "#94A3B8",
	textTertiary: "#64748B",
	textMuted: "#475569",
	danger: "#F87171",
	moon: "#A5B4FC",
}

const light: typeof dark = {
	background: "#F8FAFC",
	surface: "#FFFFFF",
	card: "#FFFFFF",
	border: "#E2E8F0",
	foreground: "#0F172A",
	primary: "#0A6680",
	primaryForeground: "#FFFFFF",
	textSecondary: "#475569",
	textTertiary: "#556377",
	textMuted: "#606F85",
	danger: "#B91C1C",
	moon: "#4F46E5",
}

export type ThemeColors = typeof dark

export function useThemeColors(): ThemeColors {
	const scheme = useColorScheme()
	// The web app ships only the dark palette, so ignore the browser setting there.
	if (Platform.OS === "web") return dark
	return scheme === "light" ? light : dark
}
