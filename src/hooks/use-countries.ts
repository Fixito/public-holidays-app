import { useQuery } from '@tanstack/react-query';

import * as holidaysService from '../services/holidays-service';

export function useCountries() {
  return useQuery({
    queryKey: ['countries'],
    queryFn: () => holidaysService.getCountries(),
    staleTime: 1000 * 60 * 60 * 24,
  });
}