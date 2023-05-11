// import "styled-components";
// import theme from "@/styles/themes/styledTheme";

// type ThemeInterface = typeof theme;

// declare module "styled-components" {
//   interface DefaultTheme extends ThemeInterface {}
// }

import "styled-components";
import { Theme } from "@mui/material/styles";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
