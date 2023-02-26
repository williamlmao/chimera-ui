import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "../utils";

export const Avatar = ({
  src,
  fallback,
}: {
  src: string;
  fallback: string;
}) => {
  return (
    <Avatar.Root>
      <Avatar.Image src={src} />
      <Avatar.Fallback> {fallback} </Avatar.Fallback>
    </Avatar.Root>
  );
};

type RootElement = React.ElementRef<typeof AvatarPrimitive.Root>;
type RootProps = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & {
  ignoreDefaultStyles?: boolean;
};

const Root = React.forwardRef<RootElement, RootProps>((props, forwardedRef) => {
  const { className, ignoreDefaultStyles, ...rest } = props;
  return (
    <AvatarPrimitive.Root
      {...rest}
      ref={forwardedRef}
      className={cn(
        {
          "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full":
            !ignoreDefaultStyles,
        },
        className
      )}
    />
  );
});

Root.displayName = "Avatar.Root";
Avatar.Root = Root;

/**
 * Default Classes: ~ "aspect-square object-cover h-full w-full" ~
 *
 */
const Image = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square object-cover h-full w-full", className)}
    {...props}
  />
));
Image.displayName = "Avatar.Image";
Avatar.Image = Image;

/**
 * Default Classes: ~ "flex h-full w-full items-center justify-center rounded-full bg-base-content text-base" ~
 *
 */
const Fallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-base-content text-base",
      className
    )}
    {...props}
  />
));
Fallback.displayName = "Avatar.Fallback";
Avatar.Fallback = Fallback;
