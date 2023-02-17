/* eslint-disable @next/next/no-img-element */
import { GitHubLogoIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button, DropdownMenu, Input } from "chimera-tw";
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
  Sprout,
} from "lucide-react";

export const Preview = () => {
  return (
    <div className="w-full h-full border-line rounded-md bg-base flex-1">
      <div className="bg-base w-full p-4 border-b border-line font-bold text-base-content flex justify-between items-center">
        <div className="text-2xl flex items-center gap-1">
          logo <Sprout className="text-primary" />
        </div>
        <div className="">
          <Input type="text" placeholder="Search" className="w-64 h-8" />
        </div>
        <div className="flex items-center">
          <DropDownExample />
        </div>
      </div>
      <div className="p-8 bg-base flex flex-col gap-8" id="body">
        <div className="flex flex-col items-center">
          <div className="text-center text-6xl font-bold p-12 text-base-content">
            Scroll{" "}
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              down
            </span>{" "}
            to see more examples
          </div>
          <div className="flex gap-2">
            <Button variant="secondary-outline">Secondary</Button>
            <Button className="">Primary</Button>
          </div>
        </div>
        {/* Create a card with a random image */}
        <div
          className="bg-base-2 hover:bg-base-2-focus hover:cursor-pointer shadow--md flex flex-col justify-center p-4 w-64 h-fit rounded-md"
          id="card"
        >
          <div className="w-full h-full bg-base-2 border border-line rounded-md overflow-hidden">
            <img
              src="https://picsum.photos/seed/picsum/640/480"
              alt="random"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left">
            <h1 className="text-2xl font-bold text-base-content">
              {`A random blog post title (text-base-content)`}
            </h1>
            <p className="text-base-content-2">{`Some description that you'd find for a blog post. This one is using text-base-content-2 to provide some contrast with the title.`}</p>
          </div>
        </div>
        <div className="flex flex-col gap-2" id="alerts">
          <div className="w-full h-12 rounded-md bg-success border-2 border-success text-success-content flex items-center px-4">
            success alert
          </div>
          <div className="w-full h-12 rounded-md bg-success-subtle border-2 border-success text-success-content-inverse flex items-center px-4">
            success alert inverse
          </div>
          <div className="w-full h-12 rounded-md bg-danger border-2 border-danger text-danger-content flex items-center px-4">
            danger alert
          </div>
          <div className="w-full h-12 rounded-md bg-danger-subtle border-2 border-danger text-danger-content-inverse flex items-center px-4">
            danger alert inverse
          </div>
          <div className="w-full h-12 rounded-md bg-warning border-2 border-warning text-warning-content flex items-center px-4">
            warning alert
          </div>
          <div className="w-full h-12 rounded-md bg-warning-subtle border-2 border-warning text-warning-content-inverse flex items-center px-4">
            warning alert inverse
          </div>
        </div>

        <div className="flex gap-4">
          <Button>Primary</Button>
          <Button className="bg-primary-subtle text-primary-focus border-primary border-2 hover:text-primary-content">
            Primary Subtle
          </Button>
        </div>
      </div>
    </div>
  );
};

const DropDownExample = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button className="bg-transparent hover:text-primary hover:bg-transparent text-base-content">
          <HamburgerMenuIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="w-56">
        <DropdownMenu.Label>My Account</DropdownMenu.Label>
        <DropdownMenu.Separator />
        <DropdownMenu.Group>
          <DropdownMenu.Item>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <DropdownMenu.Shortcut>⇧⌘P</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <DropdownMenu.Shortcut>⌘B</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <DropdownMenu.Shortcut>⌘S</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <Keyboard className="mr-2 h-4 w-4" />
            <span>Keyboard shortcuts</span>
            <DropdownMenu.Shortcut>⌘K</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
        </DropdownMenu.Group>
        <DropdownMenu.Separator />
        <DropdownMenu.Group>
          <DropdownMenu.Item>
            <Users className="mr-2 h-4 w-4" />
            <span>Team</span>
          </DropdownMenu.Item>
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger>
              <UserPlus className="mr-2 h-4 w-4" />
              <span>Invite users</span>
            </DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent>
                <DropdownMenu.Item>
                  <Mail className="mr-2 h-4 w-4" />
                  <span>Email</span>
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span>Message</span>
                </DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  <span>More...</span>
                </DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>
          <DropdownMenu.Item>
            <Plus className="mr-2 h-4 w-4" />
            <span>New Team</span>
            <DropdownMenu.Shortcut>⌘+T</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
        </DropdownMenu.Group>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>
          <Github className="mr-2 h-4 w-4" />
          <span>GitHub</span>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <LifeBuoy className="mr-2 h-4 w-4" />
          <span>Support</span>
        </DropdownMenu.Item>
        <DropdownMenu.Item disabled>
          <Cloud className="mr-2 h-4 w-4" />
          <span>API</span>
        </DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
          <DropdownMenu.Shortcut>⇧⌘Q</DropdownMenu.Shortcut>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
