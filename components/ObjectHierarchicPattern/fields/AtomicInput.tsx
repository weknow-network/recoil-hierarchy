import React from 'react';
import { RecoilState, useRecoilState } from 'recoil';
import { IWithClassName } from '../../../interfaces';

interface IProps extends IWithClassName {
  name: string;
  multi?: boolean;
  atom: RecoilState<string>;
}

export const AtomicInput = ({ name, atom, multi, className }: IProps) => {
  const [value, mutate] = useRecoilState(atom);
  const handleChanges = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => mutate(e.target.value);

  return (
    <>
      <h4>{name}</h4>
      {!multi && (
        <input
          className={className}
          type="text"
          value={value as string}
          onChange={handleChanges}
        />
      )}
      {multi && (
        <textarea
          className={className}
          value={value as string}
          onChange={handleChanges}
          rows={5}
          cols={5}
        />
      )}
    </>
  );
};
