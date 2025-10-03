import { colors } from "@/theme/colors";
import { Pressable, Text, type PressableProps, type ViewStyle } from "react-native";

type AppButtonProps = Omit<PressableProps, "style" | "children"> & {
  label: string;
  style?: ViewStyle;
};

export function AppButton({ label, style, ...rest }: AppButtonProps) {
  return (
    <Pressable
      style={[{
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: colors.primary,
        borderRadius: 8,
        alignItems: "center"
      }, style]}
      {...rest}
    >
      <Text style={{ color: colors.onPrimary, fontWeight: "600" }}>{label}</Text>
    </Pressable>
  );
}


