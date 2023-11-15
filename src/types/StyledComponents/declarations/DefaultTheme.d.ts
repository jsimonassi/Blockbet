import 'styled-components';
import { AppTheme } from '../AppTheme';

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {};
}
