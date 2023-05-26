import { axiosClient } from '@/libs/axios';

type Path = `${string}/`;

export const fetcher = async (uri: Path) => {
  return await axiosClient.get(uri).then((res) => {
    return res.data;
  });
};
