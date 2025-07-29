import type { Holiday } from '../types/api';

interface HolidayListProps {
  holidays: Holiday[] | undefined;
  error: Error | null;
}

export default function HolidayList({ holidays, error }: HolidayListProps) {
  if (holidays) {
    if (holidays.length === 0) {
      return <div>Aucun jour férié trouvé pour ce pays.</div>;
    }

    return (
      <ul>
        {holidays?.map((holiday: Holiday) => (
          <li key={holiday.id}>
            {new Date(holiday.startDate).toLocaleDateString('fr-FR', {
              month: 'long',
              day: 'numeric',
            })}{' '}
            - {holiday.name[0]?.text}
          </li>
        ))}
      </ul>
    );
  }

  if (error) return <div>Erreur: {error.message}</div>;

  return <div>Chargement des jours fériés...</div>;
}
