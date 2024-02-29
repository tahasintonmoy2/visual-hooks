# `Visual Hooks`

Visual Hooks is a Next.js library for creating dialogs, mobile sidebar or other things.

The `visual hooks` package contains only the necessary hooks to create dialogs, mobile sidebar or other things like `useInfinityChatScroll` for chatting app, e-commerce or live streaming app.

## Usage

```js
//import the modules
import { useDialog } from "visual-hooks"; // or as your need

export const DialogButton = () => {
  const { isOpen, onClose } = useDialog();

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              Visual Hooks is a Next.js library
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};
```
