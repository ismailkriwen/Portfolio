"use client";

import {
  Modal,
  ModalBody,
  ModalContent,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import { Rss } from "lucide-react";
import Image from "next/image";

type SocialModalProps = {
  color?:
    | "default"
    | "primary"
    | "danger"
    | "secondary"
    | "success"
    | "warning";
};

export const SocialModal = ({ color = "default" }: SocialModalProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Tooltip showArrow radius="sm" content="Social Links" color={color}>
        <Rss className="w-5 aspect-square cursor-pointer" onClick={onOpen} />
      </Tooltip>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} radius="sm">
        <ModalContent>
          <ModalBody className="flex gap-5 flex-row items-center justify-center">
            <Tooltip radius="sm" showArrow content="facebook" placement="top">
              <Image
                src="/social/facebook.png"
                alt="Facebook"
                width={36}
                height={36}
                className="object-contain rounded-full cursor-pointer"
              />
            </Tooltip>
            <Tooltip radius="sm" showArrow content="instagram" placement="top">
              <Image
                src="/social/instagram.png"
                alt="instagram"
                width={36}
                height={36}
                className="object-contain rounded-full cursor-pointer"
              />
            </Tooltip>
            <Tooltip radius="sm" showArrow content="spotify" placement="top">
              <Image
                src="/social/spotify.png"
                alt="spotify"
                width={36}
                height={36}
                className="object-contain rounded-full cursor-pointer"
              />
            </Tooltip>
            <Tooltip radius="sm" showArrow content="youtube" placement="top">
              <Image
                src="/social/youtube.png"
                alt="youtube"
                width={36}
                height={36}
                className="object-contain rounded-full cursor-pointer"
              />
            </Tooltip>
            <Tooltip radius="sm" showArrow content="github" placement="top">
              <Image
                src="/social/github.png"
                alt="github"
                width={36}
                height={36}
                className="object-contain rounded-full cursor-pointer"
              />
            </Tooltip>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

// https://open.spotify.com/user/31cxj3tfn3orz53ctqpjmjwtmace?si=e115e0c390d04f1f -- Spotify
