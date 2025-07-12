import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import Image from "next/image";

export interface viewProjectTypes {
  projectName: string;
  description: string;
  image: string[];
}
const loc = "/assets/images";
const latestProject: viewProjectTypes[] = [
  {
    projectName: "DRSchecker - nextjs, gemini api",
    description:
      "Depression Rating Scale Checker to assess one's stress level and provide advice",
    image: [
      `${loc}/drsLatest.png`,
      `${loc}/d1.png`,
      `${loc}/d2.png`,
      `${loc}/d3.png`,
      `${loc}/d4.png`,
      `${loc}/d5.png`,
    ],
  },
  {
    projectName: "ATLS - python, react, tensorflow",
    description: "Automated Traffic Ligth System to lessen traffic congestion",
    image: [
      `${loc}/a7.png`,
      `${loc}/a1.png`,
      `${loc}/a2.png`,
      `${loc}/a3.png`,
      `${loc}/a4.png`,
      `${loc}/a5.png`,
      `${loc}/a6.png`,
    ],
  },
];
export function ViewProjectsDialog({
  open,
  setOpen,
  projectView,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  projectView: string;
}) {
  const found = latestProject.filter((a) => a.projectName === projectView);
  return (
    <>
      {found ? (
        found.map((item, index) => (
          <Dialog key={index} open={open}>
            <DialogContent
              showCloseButton={false}
              className="w-full min-w-[1200px] overflow-y-auto h-[680px]"
            >
              <DialogHeader>
                <DialogClose
                  onClick={() => setOpen((prev) => prev !== prev)}
                  className="absolute right-4 top-4 cursor-pointer"
                >
                  <X />
                </DialogClose>
                <DialogTitle>{item.projectName}</DialogTitle>
                <DialogDescription className="text-[#ededed]">
                  {item.description}
                </DialogDescription>
              </DialogHeader>
              {item.image &&
                item.image.map((i, idx) => (
                  <div key={idx} className="flex flex-wrap items-center gap-2">
                    <div className="w-[500px] h-[500px] flex-1 gap-2">
                      <div className="relative w-full h-full rounded-md">
                        <Image
                          src={`${i}`}
                          alt="Project Image"
                          fill
                          priority
                          sizes="w-full h-full"
                          className="object-contain rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                  <Button
                    onClick={() => setOpen((prev) => prev !== prev)}
                    type="button"
                    variant="secondary"
                  >
                    Close
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        ))
      ) : (
        <p>Not found</p>
      )}
    </>
  );
}
