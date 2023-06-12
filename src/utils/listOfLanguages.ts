export interface Language {
  label: string;
  value: string;
}

export function listOfLanguages(): Language[] {
  return [
    {label: "Spanish", value: "es"},
    {label: "French", value: "fr"},
    {label: "Japanese", value: "ja"},
    {label: "Arabic", value: "ar"},
    {label: "Russian", value: "ru"},
    {label: "Portuguese", value: "pt"},
    {label: "Simplified Chinese", value: "zh-CN"},
    {label: "Hindi", value: "hi"},
    {label: "Thai", value: "th"},
    {label: "Afrikaans", value: "af"},
    {label: "Swahili", value: "sw"},
  ]
}