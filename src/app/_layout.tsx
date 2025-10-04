  import { Stack } from "expo-router";

export default function layout() {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
        animation: "slide_from_right",
        headerBackButtonDisplayMode: "minimal",
      }}
    />
  );
}
