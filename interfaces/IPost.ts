export interface IPostRaw {
  readonly userId: number;
  readonly id: number;
  readonly title: string;
  readonly body: string;
}

export type IPost = IPostRaw & Record<keyof IPostRaw, unknown>;
