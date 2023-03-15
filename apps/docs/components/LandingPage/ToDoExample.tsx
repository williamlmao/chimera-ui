import {
  Avatar,
  Dialog,
  Menubar,
  Popover,
  Select,
  Toggle,
} from "@chimera-ui/components";
import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
import { Calendar, Filter, SortAsc, SortDesc, X } from "lucide-react";
import { useState } from "react";

type ToDoItem = {
  id: number;
  title: string;
  description: string;
  dueIn: string;
  starred: boolean;
  people: {
    name: string;
    avatar: string;
  }[];
};

const people = [
  {
    name: "Will",
    avatar: "https://avatars.githubusercontent.com/u/55903529?s=40&v=4",
  },
  {
    name: "Steve",
    avatar: "/avatar_steve.png",
  },
  {
    name: "Sally",
    avatar: "/avatar_sally.png",
  },
];

// Generate different tasks for each item in ToDoItemMockData
const ToDoItemsMockData = [
  {
    id: 1,
    title: "Create new landing page",
    description: "Finish the components and documentation",
    dueIn: "1 day",
    starred: true,
    people: [
      {
        name: "Will",
        avatar: "https://avatars.githubusercontent.com/u/55903529?s=40&v=4",
      },
      {
        name: "Steve",
        avatar: "/avatar_steve.png",
      },
    ],
  },

  {
    id: 2,
    title: "Add tsdocs",
    description:
      "Add default types to the tsdoc descriptions for all components",
    dueIn: "2 days",
    starred: false,
    people: [
      {
        name: "Will",
        avatar: "https://avatars.githubusercontent.com/u/55903529?s=40&v=4",
      },
      {
        name: "Steve",
        avatar: "/avatar_steve.png",
      },
    ],
  },
  {
    id: 3,
    title: "Add Toast component",
    description: "Maybe check out react-hot-toast",
    dueIn: "2 days",
    starred: true,
    people: [
      {
        name: "Steve",
        avatar: "/avatar_steve.png",
      },
      {
        name: "Sally",
        avatar: "/avatar_sally.png",
      },
    ],
  },
  {
    id: 4,
    title: "Create color system cheat sheet",
    description:
      "A quick reference for when someone isn't sure what color to use",
    dueIn: "2 days",
    starred: false,
    people: [
      {
        name: "Sally",
        avatar: "/avatar_sally.png",
      },
    ],
  },
  {
    id: 5,
    title: "Re-write introduction page",
    description: "Current page is too long and not very clear",
    dueIn: "2 days",
    starred: true,
    people: [
      {
        name: "Steve",
        avatar: "/avatar_steve.png",
      },
      {
        name: "Sally",
        avatar: "/avatar_sally.png",
      },
      {
        name: "Will",
        avatar: "https://avatars.githubusercontent.com/u/55903529?s=40&v=4",
      },
    ],
  },
  {
    id: 6,
    title: "Add Card component",
    description: "Add more components to Chimera UI",
    dueIn: "2 days",
    starred: true,
    people: [
      {
        name: "Sally",
        avatar: "/avatar_sally.png",
      },
    ],
  },
];

export const TodoExample = () => {
  const [selectedItem, setSelectedItem] = useState<ToDoItem | null>(null);
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const [peopleFilter, setPeopleFilter] = useState({
    Will: false,
    Steve: true,
    Sally: false,
  });

  return (
    <div className="w-full bg-base rounded-md shadow-md relative @container">
      <Dialog.Root
        open={!!selectedItem}
        onOpenChange={(open: boolean) => {
          if (!open) setSelectedItem(null);
        }}
      >
        <Dialog.Overlay />
        <Dialog.Content className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] gap-0">
          <h1
            contentEditable
            id="name"
            spellCheck="false"
            className="text-overlay-content bg-overlay border-none text-2xl font-bold focus:outline-line-focus focus:border-line-focus focus:bg-input mb-1 px-3 py-1"
          >
            {selectedItem?.title}
          </h1>

          <p
            contentEditable
            spellCheck="false"
            id="description"
            className="text-overlay-content bg-overlay border-none h-fit flex-wrap px-3 focus:bg-input py-1 focus:outline-line-focus focus:border-line-focus "
          >
            {selectedItem?.description}
          </p>
          <div className="p-3">
            <div className="flex ml-1">
              {selectedItem?.people.map((person) => {
                return (
                  <div className="-ml-1">
                    <Avatar.Root className="w-6 h-6">
                      <Avatar.Image alt="Colm Tuite" src={person.avatar} />
                      <Avatar.Fallback className="AvatarFallback" delayMs={600}>
                        <p>CT</p>
                      </Avatar.Fallback>
                    </Avatar.Root>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-between items-center mt-4">
              <div className="text-xs text-base-content-3 flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary-content" />
                </div>
                <div className="">{`${selectedItem?.dueIn}`}</div>
              </div>
              <div className="">
                {selectedItem?.starred ? (
                  <StarFilledIcon className="text-secondary w-6 h-8" />
                ) : (
                  <StarIcon className="text-secondary w-6 h-6" />
                )}
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Root>
      <Menubar.Root className="rounded-b-none flex justify-between pr-4 border-none">
        <div className="flex">
          <Menubar.Menu>
            <Menubar.Trigger className="text-overlay-content">
              File
            </Menubar.Trigger>
            <Menubar.Content>
              <Menubar.Item>
                <p>
                  New Tab <Menubar.Shortcut>⌘T</Menubar.Shortcut>
                </p>
              </Menubar.Item>
              <Menubar.Item>
                <p>
                  New Window <Menubar.Shortcut>⌘N</Menubar.Shortcut>
                </p>
              </Menubar.Item>
              <Menubar.Item disabled>New Incognito Window</Menubar.Item>
              <Menubar.Separator />
              <Menubar.Sub>
                <Menubar.SubTrigger>Share</Menubar.SubTrigger>
                <Menubar.SubContent>
                  <Menubar.Item>Email link</Menubar.Item>

                  <Menubar.Item>Messages</Menubar.Item>

                  <Menubar.Item>Notes</Menubar.Item>
                </Menubar.SubContent>
              </Menubar.Sub>
              <Menubar.Separator />
              <Menubar.Item>
                <p>
                  Print... <Menubar.Shortcut>⌘P</Menubar.Shortcut>
                </p>
              </Menubar.Item>
            </Menubar.Content>
          </Menubar.Menu>
          <Menubar.Menu>
            <Menubar.Trigger className="text-overlay-content">
              Edit
            </Menubar.Trigger>
            <Menubar.Content>
              <Menubar.Item>
                <p>
                  Undo <Menubar.Shortcut>⌘Z</Menubar.Shortcut>
                </p>
              </Menubar.Item>
              <Menubar.Item>
                <p>
                  Redo <Menubar.Shortcut>⇧⌘Z</Menubar.Shortcut>
                </p>
              </Menubar.Item>
              <Menubar.Separator />
              <Menubar.Sub>
                <Menubar.SubTrigger>Find</Menubar.SubTrigger>
                <Menubar.SubContent>
                  <Menubar.Item>Search the web</Menubar.Item>
                  <Menubar.Separator />
                  <Menubar.Item>Find...</Menubar.Item>

                  <Menubar.Item>Find Next</Menubar.Item>

                  <Menubar.Item>Find Previous</Menubar.Item>
                </Menubar.SubContent>
              </Menubar.Sub>
              <Menubar.Separator />
              <Menubar.Item>Cut</Menubar.Item>

              <Menubar.Item>Copy</Menubar.Item>

              <Menubar.Item>Paste</Menubar.Item>
            </Menubar.Content>
          </Menubar.Menu>
          <Menubar.Menu>
            <Menubar.Trigger className="text-overlay-content">
              View
            </Menubar.Trigger>
            <Menubar.Content>
              <Menubar.CheckboxItem>
                Always Show Bookmarks Bar
              </Menubar.CheckboxItem>
              <Menubar.CheckboxItem checked>
                <p>Always Show Full URLs</p>
              </Menubar.CheckboxItem>
              <Menubar.Separator />
              <Menubar.Item inset>
                <p>
                  Reload <Menubar.Shortcut>⌘R</Menubar.Shortcut>
                </p>
              </Menubar.Item>
              <Menubar.Item disabled inset>
                <p>
                  Force Reload <Menubar.Shortcut>⇧⌘R</Menubar.Shortcut>
                </p>
              </Menubar.Item>
              <Menubar.Separator />
              <Menubar.Item inset>Toggle Fullscreen</Menubar.Item>
              <Menubar.Separator />
              <Menubar.Item inset>Hide Sidebar</Menubar.Item>
            </Menubar.Content>
          </Menubar.Menu>
          <Menubar.Menu>
            <Menubar.Trigger className="text-overlay-content">
              Profiles
            </Menubar.Trigger>
            <Menubar.Content>
              <Menubar.RadioGroup value="benoit">
                <Menubar.RadioItem value="andy">Andy</Menubar.RadioItem>

                <Menubar.RadioItem value="benoit">Benoit</Menubar.RadioItem>

                <Menubar.RadioItem value="Luis">Luis</Menubar.RadioItem>
              </Menubar.RadioGroup>
              <Menubar.Separator />
              <Menubar.Item inset>Edit...</Menubar.Item>
              <Menubar.Separator />
              <Menubar.Item inset>Add Profile...</Menubar.Item>
            </Menubar.Content>
          </Menubar.Menu>
        </div>
        <Avatar.Root className="w-6 h-6 float-right">
          <Avatar.Image
            alt="Will"
            src="https://avatars.githubusercontent.com/u/55903529?s=40&v=4"
          />
          <Avatar.Fallback className="AvatarFallback" delayMs={600}>
            <p>WL</p>
          </Avatar.Fallback>
        </Avatar.Root>
      </Menubar.Root>
      <div className="p-8 h-[400px] overflow-y-auto no-scrollbar">
        <div className="mb-4 flex items-center justify-between">
          <div className="text-2xl  font-extrabold text-base-content">
            🏃🏻‍♂️ Sprint 3
          </div>

          <div className="flex text-base-content-2 items-center">
            <Popover.Root>
              <Popover.Trigger
                asChild
                className="bg-transparent text-base-content-2 hover:text-primary hover:bg-transparent"
              >
                <Filter className="w-5 h-5" />
              </Popover.Trigger>
              <Popover.Portal>
                <Popover.Content className="PopoverContent" sideOffset={5}>
                  <div className="flex gap-1">
                    {people.map((person) => {
                      return (
                        <Toggle.Root
                          pressed={
                            peopleFilter[
                              person.name as keyof typeof peopleFilter
                            ]
                          }
                          onPressedChange={(pressed: boolean) => {
                            setPeopleFilter((prev) => ({
                              ...prev,
                              [person.name]: pressed,
                            }));
                          }}
                        >
                          <div className="flex items-center">
                            <Avatar.Root className="w-6 h-6 float-right">
                              <Avatar.Image alt="Will" src={person.avatar} />
                              <Avatar.Fallback
                                className="AvatarFallback"
                                delayMs={600}
                              >
                                <p>WL</p>
                              </Avatar.Fallback>
                            </Avatar.Root>
                          </div>
                        </Toggle.Root>
                      );
                    })}
                  </div>

                  <Popover.Arrow className="PopoverArrow" />
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
            <Select.Root
              onValueChange={(value: string) => {
                if (value.includes("asc")) {
                  setSortDir("asc");
                } else {
                  setSortDir("desc");
                }
              }}
            >
              <Select.Trigger className="bg-transparent text-base-content-2 hover:text-primary hover:bg-transparent w-fit gap-2 border-none focus:outline-nonew">
                <Select.Value>
                  {sortDir === "asc" ? (
                    <SortAsc className="w-5 h-5" />
                  ) : (
                    <SortDesc className="w-5 h-5" />
                  )}
                </Select.Value>
              </Select.Trigger>
              <Select.Content>
                <Select.Group>
                  <Select.Item value="due-asc">Due ↑</Select.Item>
                  <Select.Item value="due-desc">Due ↓</Select.Item>
                  <Select.Item value="cre-asc">Created ↑</Select.Item>
                  <Select.Item value="cre-desc">Created ↓</Select.Item>
                </Select.Group>
              </Select.Content>
            </Select.Root>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 @[375px]:grid-cols-2 @[500px]:grid-cols-3">
          {ToDoItemsMockData.map((item) => {
            return (
              <ProjectItem item={item} setSelectedItem={setSelectedItem} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const ProjectItem = ({
  item,
  setSelectedItem,
}: {
  item: ToDoItem;
  setSelectedItem: (item: ToDoItem) => void;
}) => {
  const [starred, setStarred] = useState(item.starred);
  return (
    <div
      className="bg-base-2 hover:bg-base-focus hover:cursor-pointer text-base-content p-4 rounded-md shadow-md flex flex-col justify-between gap-2 relative"
      onClick={() => {
        setSelectedItem(item);
      }}
    >
      <div className="">
        <div className="text-lg font-bold  ">{item.title}</div>
        <div className="text-base-content-2 text-sm ">{item.description}</div>
      </div>
      <div className="">
        <div className="flex ml-1">
          {item.people.map((person) => {
            return (
              <div className="-ml-1">
                <Avatar.Root className="w-4 h-4">
                  <Avatar.Image alt="Colm Tuite" src={person.avatar} />
                  <Avatar.Fallback className="AvatarFallback" delayMs={600}>
                    <p>CT</p>
                  </Avatar.Fallback>
                </Avatar.Root>
              </div>
            );
          })}
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="text-xs text-base-content-3 flex items-center gap-2">
            <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
              <Calendar className="w-3 h-3 text-primary-content" />
            </div>
            <div className="">{`${item.dueIn}`}</div>
          </div>
          <div className="">
            {starred ? (
              <StarFilledIcon
                className="text-secondary"
                onClick={() => setStarred(false)}
              />
            ) : (
              <StarIcon
                className="text-secondary"
                onClick={() => setStarred(true)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
