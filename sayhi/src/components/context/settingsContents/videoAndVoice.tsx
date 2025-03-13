import { Camera, Disc, Mic, Volume2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import CameraCapture from "@/components/cameraCapture/cameraCapture";

const VideoAndVoice = () => {
  return (
    <div className="flex flex-col gap-1 p-3 rounded-r-md w-full h-full text-white">
      <h2 className="font-semibold">Video & Voice</h2>
      <div className="flex flex-col gap-2 py-2">
        <p>Video</p>
        <Select className="border-0">
          <SelectTrigger className="bg-neutral-500 border-0 w-44 data-[placeholder]:text-neutral-200">
            <Camera size={15} className="text-white" />
            <SelectValue placeholder="Choose Video" className="text-white" />
          </SelectTrigger>
          <SelectContent className="bg-neutral-500 border-0 text-white">
            <SelectGroup>
              <SelectLabel className="flex items-center gap-2">
                <span>Choose Video</span>
              </SelectLabel>
              <SelectItem
                value="hpTrueVisionHDCamera"
                className="focus:bg-neutral-600 focus:text-white"
              >
                <span>HP TrueVision HD Camera</span>
              </SelectItem>
              <SelectItem
                value="hpWebcam"
                className="focus:bg-neutral-600 focus:text-white"
              >
                <span>HP WebCam</span>
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="rounded-md w-full min-h-40 overflow-hidden">
        <CameraCapture />
      </div>
      <div className="flex flex-col gap-2 py-2">
        <p>Microphone</p>
        <Select className="border-0">
          <SelectTrigger className="bg-neutral-500 border-0 w-50 data-[placeholder]:text-neutral-200">
            <Mic size={15} className="text-white" />
            <SelectValue
              placeholder="Choose Microphone"
              className="text-white"
            />
          </SelectTrigger>
          <SelectContent className="bg-neutral-500 border-0 text-white">
            <SelectGroup>
              <SelectLabel className="flex items-center gap-2">
                <span>Choose Microphone</span>
              </SelectLabel>
              <SelectItem
                value="hpTrueVisionHDCamera"
                className="focus:bg-neutral-600 focus:text-white"
              >
                <span>Default Device</span>
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <p className="text-xs">Test</p>
        <div className="flex items-center gap-2">
          <Button className="bg-neutral-500 hover:bg-neutral-700 font-normal text-red-300 hover:text-red-400 cursor-pointer">
            <Disc size={15} className="text-white" />
          </Button>
          <p className="text-xs">Record from your mic</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 py-2">
        <p>Speakers</p>
        <Select className="border-0">
          <SelectTrigger className="bg-neutral-500 border-0 w-50 data-[placeholder]:text-neutral-200">
            <Volume2 size={15} className="text-white" />
            <SelectValue placeholder="Choose Speaker" className="text-white" />
          </SelectTrigger>
          <SelectContent className="bg-neutral-500 border-0 text-white">
            <SelectGroup>
              <SelectLabel className="flex items-center gap-2">
                <span>Choose Speaker</span>
              </SelectLabel>
              <SelectItem
                value="defaultDevice"
                className="focus:bg-neutral-600 focus:text-white"
              >
                <span>Default Device</span>
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default VideoAndVoice;
