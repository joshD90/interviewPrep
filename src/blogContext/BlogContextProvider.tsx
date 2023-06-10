import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

export type Blog = { title: string; body: string };
export type BlogsContext = [Blog[], Dispatch<SetStateAction<Blog[]>>];

export const BlogContext = createContext<BlogsContext | null>(null);

const blogData = [
  { title: "title1", body: "body1" },
  { title: "title2", body: "body2" },
];

type Props = { children: ReactNode };

export const BlogContextProvider: FC<Props> = ({ children }) => {
  const [blogs, setBlogs] = useState<Blog[]>(blogData);

  return (
    <BlogContext.Provider value={[blogs, setBlogs]}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
