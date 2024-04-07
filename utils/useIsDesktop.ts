import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect, useState } from 'react';

export default function useIsDesktop(): boolean | null {
  const theme = useTheme();
  const isDesktopMediaQuery = useMediaQuery(theme.breakpoints.up('md'));
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
  useEffect(() => {
    setIsDesktop(isDesktopMediaQuery);
  }, [isDesktopMediaQuery]);
  return isDesktop;
}
