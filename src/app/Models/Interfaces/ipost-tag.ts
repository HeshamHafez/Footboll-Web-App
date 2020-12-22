import { Iposts } from "./iposts";
import { Itags } from "./itags";
export interface IpostTag {
  "postId": number,
  "tagId": number,
  "Post":Iposts,
  "Tag":Itags
}
