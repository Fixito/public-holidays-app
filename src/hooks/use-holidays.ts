import { useQuery } from '@tanstack/react-query';

import * as holidaysService from '../services/holidays-service';

export function useHolidays(countryIsoCode: string) {
  return useQuery({
    queryKey: ['holidays', countryIsoCode],
    queryFn: () => holidaysService.getHolidays(countryIsoCode),
    enabled: Boolean(countryIsoCode),
    staleTime: 1000 * 60 * 60,
  });
}