export type SelectOptions = {
  title?: {
    class?: string | Record<string, boolean> | Array<string>;
    style?: string | Record<string, boolean> | Array<string>;
  };
  items?: {
    class?: string | Record<string, boolean> | Array<string>;
    style?: string | Record<string, boolean> | Array<string>;
  };
  item?: {
    class?: string | Record<string, boolean> | Array<string>;
    style?: string | Record<string, boolean> | Array<string>;
  };
  placeholder?: string;
  label?: string;
  value?: string;
};
