// import { CardType } from "../lib/definitions";
import clsx from 'clsx';

interface CardType {
    name: string,
    description?: string,
    icon?: any,
    link?: string
}

export function Card(features: CardType) {
  return (
    <div key={features.name} className={clsx(
        '',
        {'relative pl-16': features.icon}
    )}>
        <dt className="text-xl font-bold text-gray-900">
                {features.icon
                ? 
                <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-aspiraPrimary font-bold">
                    <features.icon aria-hidden="true" className="size-8 text-white" />
                </div>
                : ''}
            
            {features.name}
        </dt>
        <dd className="mt-2 text-base text-gray-700">{features.description}</dd>
    </div>
  );
}

export function CardTile(features: CardType) {
    return (
      <div key={features.name} className={clsx(
          'border-2 border-b-6 border-gray-200 border-b-aspiraPrimary bg-white rounded-lg p-4 flex flex-col justify-center leading-normal shadow-md',
          {'relative pl-16': features.icon}
      )}>
          <dt className="text-xl font-bold text-gray-900 mb-2">
                  {features.icon
                  ? 
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-aspiraPrimary font-bold">
                      <features.icon aria-hidden="true" className="size-8 text-white" />
                  </div>
                  : ''}
              
              {features.name}
          </dt>
          <dd className="text-base text-gray-700">{features.description}</dd>
      </div>
    );
  }