import axios, { AxiosResponse } from "axios";
import { useSetAtom, WritableAtom } from "jotai";
import { PropsWithChildren, useEffect, useState } from "react";
import { Either } from "../models/either.model";
import { getFakeAxiosResponse } from "../utils/axios.utils";

interface CommonProps<T> {
  atom: WritableAtom<T, T>;
}

interface UrlProps {
  url: string;
}

interface MockProps<T> {
  mock: T;
}

type Props<T, U> = CommonProps<T> &
  PropsWithChildren &
  Either<UrlProps, MockProps<U>>;

export function GenericProvider<T, U>(props: Props<T, U>) {
  const setValue = useSetAtom(props.atom);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fn = (promise: Promise<AxiosResponse<T>>) =>
      promise.then(({ data }) => {
        setValue(data);
        setLoading(false);
      });
    if (props.url) fn(axios.get(props.url));
    if (props.mock) fn(getFakeAxiosResponse(props.mock));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>{props.children}</div>;
}
