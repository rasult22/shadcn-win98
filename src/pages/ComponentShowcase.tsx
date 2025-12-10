import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ButtonGroup } from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
} from "@/components/ui/empty";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { InputGroup, InputGroupText } from "@/components/ui/input-group";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Input } from "@/components/ui/input";
import { Item } from "@/components/ui/item";
import { Kbd } from "@/components/ui/kbd";
import { Label } from "@/components/ui/label";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { NativeSelect } from "@/components/ui/native-select";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Slider } from "@/components/ui/slider";
import { Spinner } from "@/components/ui/spinner";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Toggle } from "@/components/ui/toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  ChevronDown,
  Mail,
  User,
  Settings,
  Info,
  Home,
  FileText,
  MessageSquare,
} from "lucide-react";

export default function ComponentShowcase() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [progress, setProgress] = useState(33);
  const [sliderValue, setSliderValue] = useState([50]);

  const ComponentSection = ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">{children}</CardContent>
    </Card>
  );

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">shadcn/ui Component Showcase</h1>
        <p className="text-muted-foreground">
          A comprehensive display of all installed shadcn/ui components
        </p>
      </div>

      {/* Accordion */}
      <ComponentSection title="Accordion">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other components&apos;
              aesthetic.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </ComponentSection>

      {/* Alert & Alert Dialog */}
      <ComponentSection title="Alert Variants">
        <div className="grid md:grid-cols-2 gap-4">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Default</AlertTitle>
            <AlertDescription>Default glassmorphism alert style.</AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <Info className="h-4 w-4" />
            <AlertTitle>Destructive</AlertTitle>
            <AlertDescription>Error or warning alert style.</AlertDescription>
          </Alert>

          <Alert variant="metal">
            <Info className="h-4 w-4" />
            <AlertTitle>Metal</AlertTitle>
            <AlertDescription>Chrome/brushed metal effect.</AlertDescription>
          </Alert>

          <Alert variant="sandstorm">
            <Info className="h-4 w-4" />
            <AlertTitle>Sandstorm</AlertTitle>
            <AlertDescription>Warm desert dust atmosphere.</AlertDescription>
          </Alert>

          <Alert variant="smog">
            <Info className="h-4 w-4" />
            <AlertTitle>Smog</AlertTitle>
            <AlertDescription>Dark industrial haze with teal.</AlertDescription>
          </Alert>

          <Alert variant="fog">
            <Info className="h-4 w-4" />
            <AlertTitle>Fog</AlertTitle>
            <AlertDescription>Light ethereal mist effect.</AlertDescription>
          </Alert>

          <Alert variant="hologram">
            <Info className="h-4 w-4" />
            <AlertTitle>Hologram</AlertTitle>
            <AlertDescription>Iridescent color-shifting surface.</AlertDescription>
          </Alert>
        </div>

        <div className="mt-6">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">Show Alert Dialog</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your
                  account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </ComponentSection>

      {/* Avatar & Aspect Ratio */}
      <ComponentSection title="Avatar & Aspect Ratio">
        <div className="flex items-center gap-8">
          <div className="space-y-2">
            <p className="text-sm font-medium">Avatar</p>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>

          <div className="w-64 space-y-2">
            <p className="text-sm font-medium">Aspect Ratio (16/9)</p>
            <AspectRatio ratio={16 / 9} className="bg-muted rounded-md">
              <div className="flex items-center justify-center h-full text-muted-foreground">
                16:9 Aspect Ratio
              </div>
            </AspectRatio>
          </div>
        </div>
      </ComponentSection>

      {/* Badge & Breadcrumb */}
      <ComponentSection title="Badge & Breadcrumb">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="hologram">Hologram</Badge>
            <Badge variant="metal">Metal</Badge>
          </div>

          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/components">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </ComponentSection>

      {/* Button & Button Group */}
      <ComponentSection title="Button & Button Group">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="hologram">Hologram</Button>
            <Button variant="metal">Metal</Button>
          </div>

          <ButtonGroup>
            <Button variant="outline">First</Button>
            <Button variant="outline">Second</Button>
            <Button variant="outline">Third</Button>
          </ButtonGroup>
        </div>
      </ComponentSection>

      {/* Calendar */}
      <ComponentSection title="Calendar">
        <div className="flex justify-center">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>
      </ComponentSection>

      {/* Card */}
      <ComponentSection title="Card Variants">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Default (Glass)</CardTitle>
              <CardDescription>Glassmorphism effect</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Default card with backdrop blur and gradient border.</p>
            </CardContent>
          </Card>

          <Card variant="metal">
            <CardHeader>
              <CardTitle>Metal</CardTitle>
              <CardDescription>Chrome/brushed metal</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Metallic surface with animated gradient.</p>
            </CardContent>
          </Card>

          <Card variant="sandstorm">
            <CardHeader>
              <CardTitle>Sandstorm</CardTitle>
              <CardDescription>Desert dust theme</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Warm dusty atmosphere with sand tones.</p>
            </CardContent>
          </Card>

          <Card variant="smog">
            <CardHeader>
              <CardTitle>Smog</CardTitle>
              <CardDescription>Dark industrial haze</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Dense smog with teal undertones.</p>
            </CardContent>
          </Card>

          <Card variant="fog">
            <CardHeader>
              <CardTitle>Fog</CardTitle>
              <CardDescription>Ethereal mist</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Light fog with animated drift effect.</p>
            </CardContent>
          </Card>

          <Card variant="hologram">
            <CardHeader>
              <CardTitle>Hologram</CardTitle>
              <CardDescription>Iridescent shifting</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Color-shifting holographic surface.</p>
            </CardContent>
          </Card>
        </div>
      </ComponentSection>

      {/* Carousel */}
      <ComponentSection title="Carousel">
        <Carousel className="w-full max-w-xs mx-auto">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </ComponentSection>

      {/* Checkbox Variants */}
      <ComponentSection title="Checkbox Variants">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="cb-default" />
            <label htmlFor="cb-default" className="text-sm">Default</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="cb-metal" variant="metal" />
            <label htmlFor="cb-metal" className="text-sm">Metal</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="cb-sandstorm" variant="sandstorm" />
            <label htmlFor="cb-sandstorm" className="text-sm">Sandstorm</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="cb-smog" variant="smog" />
            <label htmlFor="cb-smog" className="text-sm">Smog</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="cb-fog" variant="fog" />
            <label htmlFor="cb-fog" className="text-sm">Fog</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="cb-hologram" variant="hologram" />
            <label htmlFor="cb-hologram" className="text-sm">Hologram</label>
          </div>
        </div>

        <div className="mt-6">
          <Collapsible>
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                Can I use this in my project? <ChevronDown className="h-4 w-4" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 p-4 border rounded-md">
              Yes! shadcn/ui is open source and free to use.
            </CollapsibleContent>
          </Collapsible>
        </div>
      </ComponentSection>

      {/* Command */}
      <ComponentSection title="Command">
        <Command className="rounded-lg border">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <Calendar className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </CommandItem>
              <CommandItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </ComponentSection>

      {/* Context Menu */}
      <ComponentSection title="Context Menu">
        <ContextMenu>
          <ContextMenuTrigger className="flex h-32 w-full items-center justify-center rounded-md border border-dashed">
            Right click here
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>Profile</ContextMenuItem>
            <ContextMenuItem>Billing</ContextMenuItem>
            <ContextMenuItem>Settings</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </ComponentSection>

      {/* Dialog & Drawer */}
      <ComponentSection title="Dialog & Drawer">
        <div className="flex gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Dialog Title</DialogTitle>
                <DialogDescription>
                  This is a dialog description. You can put any content here.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">Open Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Drawer Title</DrawerTitle>
                <DrawerDescription>
                  This is a drawer description.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </ComponentSection>

      {/* Dropdown Menu */}
      <ComponentSection title="Dropdown Menu">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Open Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ComponentSection>

      {/* Empty State */}
      <ComponentSection title="Empty State">
        <Empty>
          <EmptyHeader>
            <EmptyTitle>No items found</EmptyTitle>
            <EmptyDescription>
              Try adjusting your search or filter to find what you&apos;re looking for.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      </ComponentSection>

      {/* Field */}
      <ComponentSection title="Field">
        <Field>
          <FieldLabel>Email</FieldLabel>
          <Input type="email" placeholder="Enter your email" />
          <FieldError>This field is required</FieldError>
        </Field>
      </ComponentSection>

      {/* Hover Card */}
      <ComponentSection title="Hover Card">
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link">@nextjs</Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarImage src="https://github.com/vercel.png" />
                <AvatarFallback>VC</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@nextjs</h4>
                <p className="text-sm">
                  The React Framework – created and maintained by @vercel.
                </p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </ComponentSection>

      {/* Input, Input OTP, Input Group */}
      <ComponentSection title="Input Variants">
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div>
            <Label>Default</Label>
            <Input placeholder="Default glassmorphism input" />
          </div>
          <div>
            <Label>Metal</Label>
            <Input variant="metal" placeholder="Brushed metal input" />
          </div>
          <div>
            <Label>Sandstorm</Label>
            <Input variant="sandstorm" placeholder="Desert dust input" />
          </div>
          <div>
            <Label>Smog</Label>
            <Input variant="smog" placeholder="Industrial haze input" />
          </div>
          <div>
            <Label>Fog</Label>
            <Input variant="fog" placeholder="Ethereal mist input" />
          </div>
          <div>
            <Label>Hologram</Label>
            <Input variant="hologram" placeholder="Iridescent input" />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <Label>Input OTP</Label>
            <InputOTP maxLength={6}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>

          <div>
            <Label>Input Group</Label>
            <InputGroup>
              <InputGroupText>@</InputGroupText>
              <Input placeholder="username" />
            </InputGroup>
          </div>
        </div>
      </ComponentSection>

      {/* Item */}
      <ComponentSection title="Item">
        <div className="space-y-2">
          <Item>
            <User className="mr-2 h-4 w-4" />
            <span>User Item</span>
          </Item>
          <Item>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings Item</span>
          </Item>
        </div>
      </ComponentSection>

      {/* Kbd */}
      <ComponentSection title="Keyboard">
        <div className="flex gap-2">
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </div>
      </ComponentSection>

      {/* Label */}
      <ComponentSection title="Label">
        <div className="space-y-2">
          <Label htmlFor="name">Your Name</Label>
          <Input id="name" placeholder="Enter your name" />
        </div>
      </ComponentSection>

      {/* Menubar */}
      <ComponentSection title="Menubar">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>New Tab</MenubarItem>
              <MenubarItem>New Window</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Edit</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Undo</MenubarItem>
              <MenubarItem>Redo</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </ComponentSection>

      {/* Native Select */}
      <ComponentSection title="Native Select">
        <NativeSelect>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </NativeSelect>
      </ComponentSection>

      {/* Navigation Menu */}
      <ComponentSection title="Navigation Menu">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[400px]">
                  <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent">
                    <div className="text-sm font-medium leading-none">Introduction</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Re-usable components built using Radix UI and Tailwind CSS.
                    </p>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                Documentation
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </ComponentSection>

      {/* Pagination */}
      <ComponentSection title="Pagination">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </ComponentSection>

      {/* Popover */}
      <ComponentSection title="Popover">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Open Popover</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Dimensions</h4>
              <p className="text-sm text-muted-foreground">
                Set the dimensions for the layer.
              </p>
            </div>
          </PopoverContent>
        </Popover>
      </ComponentSection>

      {/* Progress Variants */}
      <ComponentSection title="Progress Variants">
        <div className="space-y-4">
          <div>
            <Label>Default</Label>
            <Progress value={progress} variant="default" />
          </div>
          <div>
            <Label>Metal</Label>
            <Progress value={progress} variant="metal" />
          </div>
          <div>
            <Label>Sandstorm</Label>
            <Progress value={progress} variant="sandstorm" />
          </div>
          <div>
            <Label>Smog</Label>
            <Progress value={progress} variant="smog" />
          </div>
          <div>
            <Label>Fog</Label>
            <Progress value={progress} variant="fog" />
          </div>
          <div>
            <Label>Hologram</Label>
            <Progress value={progress} variant="hologram" />
          </div>
          <div className="flex gap-2 mt-4">
            <Button onClick={() => setProgress(Math.max(0, progress - 10))}>Decrease</Button>
            <Button onClick={() => setProgress(Math.min(100, progress + 10))}>Increase</Button>
          </div>
        </div>
      </ComponentSection>

      {/* Radio Group Variants */}
      <ComponentSection title="Radio Group Variants">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <RadioGroup defaultValue="r1">
            <Label className="mb-2">Default</Label>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="r1" id="r1" />
              <Label htmlFor="r1">Option</Label>
            </div>
          </RadioGroup>
          <RadioGroup defaultValue="r2">
            <Label className="mb-2">Metal</Label>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="r2" id="r2" variant="metal" />
              <Label htmlFor="r2">Option</Label>
            </div>
          </RadioGroup>
          <RadioGroup defaultValue="r3">
            <Label className="mb-2">Sandstorm</Label>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="r3" id="r3" variant="sandstorm" />
              <Label htmlFor="r3">Option</Label>
            </div>
          </RadioGroup>
          <RadioGroup defaultValue="r4">
            <Label className="mb-2">Smog</Label>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="r4" id="r4" variant="smog" />
              <Label htmlFor="r4">Option</Label>
            </div>
          </RadioGroup>
          <RadioGroup defaultValue="r5">
            <Label className="mb-2">Fog</Label>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="r5" id="r5" variant="fog" />
              <Label htmlFor="r5">Option</Label>
            </div>
          </RadioGroup>
          <RadioGroup defaultValue="r6">
            <Label className="mb-2">Hologram</Label>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="r6" id="r6" variant="hologram" />
              <Label htmlFor="r6">Option</Label>
            </div>
          </RadioGroup>
        </div>
      </ComponentSection>

      {/* Resizable */}
      <ComponentSection title="Resizable">
        <ResizablePanelGroup direction="horizontal" className="min-h-[200px] rounded-lg border">
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Panel One</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Panel Two</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ComponentSection>

      {/* Scroll Area */}
      <ComponentSection title="Scroll Area">
        <ScrollArea className="h-72 w-full rounded-md border p-4">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className="py-2">
              Item {i + 1}
            </div>
          ))}
        </ScrollArea>
      </ComponentSection>

      {/* Select */}
      <ComponentSection title="Select">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="orange">Orange</SelectItem>
          </SelectContent>
        </Select>
      </ComponentSection>

      {/* Separator */}
      <ComponentSection title="Separator">
        <div>
          <div className="space-y-1">
            <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
            <p className="text-sm text-muted-foreground">
              An open-source UI component library.
            </p>
          </div>
          <Separator className="my-4" />
          <div className="flex h-5 items-center space-x-4 text-sm">
            <div>Blog</div>
            <Separator orientation="vertical" />
            <div>Docs</div>
            <Separator orientation="vertical" />
            <div>Source</div>
          </div>
        </div>
      </ComponentSection>

      {/* Sheet */}
      <ComponentSection title="Sheet">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Open Sheet</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Sheet Title</SheetTitle>
              <SheetDescription>
                This is a sheet component. You can place any content here.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </ComponentSection>

      {/* Skeleton Variants */}
      <ComponentSection title="Skeleton Variants">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label className="mb-2">Default</Label>
            <Skeleton className="h-4 w-full" />
          </div>
          <div>
            <Label className="mb-2">Metal</Label>
            <Skeleton className="h-4 w-full" variant="metal" />
          </div>
          <div>
            <Label className="mb-2">Sandstorm</Label>
            <Skeleton className="h-4 w-full" variant="sandstorm" />
          </div>
          <div>
            <Label className="mb-2">Smog</Label>
            <Skeleton className="h-4 w-full" variant="smog" />
          </div>
          <div>
            <Label className="mb-2">Fog</Label>
            <Skeleton className="h-4 w-full" variant="fog" />
          </div>
          <div>
            <Label className="mb-2">Hologram</Label>
            <Skeleton className="h-4 w-full" variant="hologram" />
          </div>
        </div>
      </ComponentSection>

      {/* Slider Variants */}
      <ComponentSection title="Slider Variants">
        <div className="space-y-4">
          <div>
            <Label>Default</Label>
            <Slider value={sliderValue} onValueChange={setSliderValue} max={100} step={1} />
          </div>
          <div>
            <Label>Metal</Label>
            <Slider defaultValue={[40]} max={100} variant="metal" />
          </div>
          <div>
            <Label>Sandstorm</Label>
            <Slider defaultValue={[60]} max={100} variant="sandstorm" />
          </div>
          <div>
            <Label>Smog</Label>
            <Slider defaultValue={[30]} max={100} variant="smog" />
          </div>
          <div>
            <Label>Fog</Label>
            <Slider defaultValue={[70]} max={100} variant="fog" />
          </div>
          <div>
            <Label>Hologram</Label>
            <Slider defaultValue={[50]} max={100} variant="hologram" />
          </div>
        </div>
      </ComponentSection>

      {/* Spinner */}
      <ComponentSection title="Spinner">
        <Spinner />
      </ComponentSection>

      {/* Switch Variants */}
      <ComponentSection title="Switch Variants">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-2">
            <Switch id="sw-default" />
            <Label htmlFor="sw-default">Default</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="sw-metal" variant="metal" />
            <Label htmlFor="sw-metal">Metal</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="sw-sandstorm" variant="sandstorm" />
            <Label htmlFor="sw-sandstorm">Sandstorm</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="sw-smog" variant="smog" />
            <Label htmlFor="sw-smog">Smog</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="sw-fog" variant="fog" />
            <Label htmlFor="sw-fog">Fog</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="sw-hologram" variant="hologram" />
            <Label htmlFor="sw-hologram">Hologram</Label>
          </div>
        </div>
      </ComponentSection>

      {/* Table */}
      <ComponentSection title="Table">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Email</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>john@example.com</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jane Smith</TableCell>
              <TableCell>Inactive</TableCell>
              <TableCell>jane@example.com</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </ComponentSection>

      {/* Textarea Variants */}
      <ComponentSection title="Textarea Variants">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label>Default</Label>
            <Textarea placeholder="Default glassmorphism textarea" />
          </div>
          <div>
            <Label>Metal</Label>
            <Textarea variant="metal" placeholder="Brushed metal textarea" />
          </div>
          <div>
            <Label>Sandstorm</Label>
            <Textarea variant="sandstorm" placeholder="Desert dust textarea" />
          </div>
          <div>
            <Label>Smog</Label>
            <Textarea variant="smog" placeholder="Industrial haze textarea" />
          </div>
          <div>
            <Label>Fog</Label>
            <Textarea variant="fog" placeholder="Ethereal mist textarea" />
          </div>
          <div>
            <Label>Hologram</Label>
            <Textarea variant="hologram" placeholder="Iridescent textarea" />
          </div>
        </div>
      </ComponentSection>

      {/* Tabs Variants */}
      <ComponentSection title="Tabs Variants">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label className="mb-2">Default</Label>
            <Tabs defaultValue="a" variant="default">
              <TabsList><TabsTrigger value="a">Tab 1</TabsTrigger><TabsTrigger value="b">Tab 2</TabsTrigger></TabsList>
            </Tabs>
          </div>
          <div>
            <Label className="mb-2">Metal</Label>
            <Tabs defaultValue="a" variant="metal">
              <TabsList><TabsTrigger value="a">Tab 1</TabsTrigger><TabsTrigger value="b">Tab 2</TabsTrigger></TabsList>
            </Tabs>
          </div>
          <div>
            <Label className="mb-2">Sandstorm</Label>
            <Tabs defaultValue="a" variant="sandstorm">
              <TabsList><TabsTrigger value="a">Tab 1</TabsTrigger><TabsTrigger value="b">Tab 2</TabsTrigger></TabsList>
            </Tabs>
          </div>
          <div>
            <Label className="mb-2">Smog</Label>
            <Tabs defaultValue="a" variant="smog">
              <TabsList><TabsTrigger value="a">Tab 1</TabsTrigger><TabsTrigger value="b">Tab 2</TabsTrigger></TabsList>
            </Tabs>
          </div>
          <div>
            <Label className="mb-2">Fog</Label>
            <Tabs defaultValue="a" variant="fog">
              <TabsList><TabsTrigger value="a">Tab 1</TabsTrigger><TabsTrigger value="b">Tab 2</TabsTrigger></TabsList>
            </Tabs>
          </div>
          <div>
            <Label className="mb-2">Hologram</Label>
            <Tabs defaultValue="a" variant="hologram">
              <TabsList><TabsTrigger value="a">Tab 1</TabsTrigger><TabsTrigger value="b">Tab 2</TabsTrigger></TabsList>
            </Tabs>
          </div>
        </div>
      </ComponentSection>

      {/* Textarea */}
      <ComponentSection title="Textarea">
        <Textarea placeholder="Type your message here." />
      </ComponentSection>

      {/* Toggle Variants */}
      <ComponentSection title="Toggle Variants">
        <div className="flex flex-wrap gap-2 mb-4">
          <Toggle aria-label="Default"><Mail className="h-4 w-4" /></Toggle>
          <Toggle variant="metal" aria-label="Metal"><Mail className="h-4 w-4" /></Toggle>
          <Toggle variant="sandstorm" aria-label="Sandstorm"><Mail className="h-4 w-4" /></Toggle>
          <Toggle variant="smog" aria-label="Smog"><Mail className="h-4 w-4" /></Toggle>
          <Toggle variant="fog" aria-label="Fog"><Mail className="h-4 w-4" /></Toggle>
          <Toggle variant="hologram" aria-label="Hologram"><Mail className="h-4 w-4" /></Toggle>
        </div>

        <div className="flex flex-wrap gap-4">
          <div>
            <Label className="mb-2 block">Default Group</Label>
            <ToggleGroup type="single" variant="default">
              <ToggleGroupItem value="a"><Home className="h-4 w-4" /></ToggleGroupItem>
              <ToggleGroupItem value="b"><FileText className="h-4 w-4" /></ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div>
            <Label className="mb-2 block">Metal Group</Label>
            <ToggleGroup type="single" variant="metal">
              <ToggleGroupItem value="a"><Home className="h-4 w-4" /></ToggleGroupItem>
              <ToggleGroupItem value="b"><FileText className="h-4 w-4" /></ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div>
            <Label className="mb-2 block">Hologram Group</Label>
            <ToggleGroup type="single" variant="hologram">
              <ToggleGroupItem value="a"><Home className="h-4 w-4" /></ToggleGroupItem>
              <ToggleGroupItem value="b"><FileText className="h-4 w-4" /></ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
      </ComponentSection>

      {/* Tooltip */}
      <ComponentSection title="Tooltip">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </ComponentSection>
    </div>
  );
}
