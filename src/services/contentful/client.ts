import { createClient } from "contentful";
import { AssertUtil } from "@/utils/token.util";

const space = process.env.NEXT_PUBLIC_SPACE;
const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

AssertUtil.assertString(space);
AssertUtil.assertString(accessToken);

export const client = createClient({
  space,
  accessToken,
});
