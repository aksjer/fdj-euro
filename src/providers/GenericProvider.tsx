import { AxiosResponse } from "axios";
import { useSetAtom, WritableAtom } from "jotai";
import { PropsWithChildren, useEffect, useState } from "react";

interface Props<T> extends PropsWithChildren {
  promise: () => Promise<AxiosResponse<T>>;
  atom: WritableAtom<T, T>;
}

export function GenericProvider<T>(props: Props<T>) {
  const setValue = useSetAtom(props.atom);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    props.promise().then(({ data }) => {
      setValue(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>{props.children}</div>;
}
