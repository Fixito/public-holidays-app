import type { HolidayDisplay } from '../types/ui';

interface HolidayListProps {
  error: Error | null;
  holidays: HolidayDisplay[] | undefined;
}

export default function HolidayList({ holidays, error }: HolidayListProps) {
  if (holidays) {
    if (holidays.length === 0) {
      return <div>Aucun jour férié trouvé pour ce pays.</div>;
    }

    return (
      <ul>
        {holidays?.map((holiday) => (
          <li key={holiday.id}>
            {new Date(holiday.startDate).toLocaleDateString('fr-FR', {
              month: 'long',
              day: 'numeric',
            })}{' '}
            - {holiday.name ?? 'Nom indisponible'}
          </li>
        ))}
      </ul>
    );
  }

  if (error) return <div>Erreur: {error.message}</div>;

  return <div>Chargement des jours fériés...</div>;
}
