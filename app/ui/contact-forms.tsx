// import { CardType } from "../lib/definitions";
import clsx from 'clsx';

interface ContactType {
    row?: any,
    type?: string,
    name?: string,
    placeholder?: any,
    defaultValue?: string,
}

export function ContactTextArea (features: ContactType) {
    return (
      <>
        <div className="mb-6">
          <textarea
            rows={features.row}
            placeholder={features.placeholder}
            name={features.name}
            className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary "
            defaultValue={features.defaultValue}
          />
        </div>
      </>
    );
  };
  export function ContactInputBox (features: ContactType) {
    return (
      <>
        <div className="mb-6">
          <input
            type={features.type}
            placeholder={features.placeholder}
            name={features.name}
            className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary "
          />
        </div>
      </>
    );
  };
  