import { Only } from "./only.model";

export type Either<T, U> = Only<T, U> | Only<U, T>;
