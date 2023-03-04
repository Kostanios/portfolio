import { client } from "@/services/contentful/client";
import { QueryParams, TTypeId } from "@/types/contentful.type";

export const getAllContentByModelTypeId = <EntryType>(
  typeId: TTypeId,
  queryParams?: QueryParams
) => {
  return client.getEntries<EntryType>({
    content_type: typeId,
    ...queryParams,
  });
};
