"use client";

import { SOCIAL_LINKS } from "@/constants";
import {
  Modal,
  ModalBody,
  ModalContent,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import { Rss } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{ base: "rounded-[4px]" }}
      >
        <ModalContent>
          <ModalBody className="flex gap-5 flex-row items-center justify-center pt-2">
            {SOCIAL_LINKS.map((link, idx) => (
              <Tooltip
                key={idx}
                classNames={{ content: "rounded-[4px]" }}
                showArrow
                content={link.name}
                placement="top"
              >
                <Link href={link.href} target="_blank">
                  <Image
                    src={`/social/${link.name}.png`}
                    alt={link.name}
                    width={36}
                    height={36}
                    className="object-contain cursor-pointer"
                  />
                </Link>
              </Tooltip>
            ))}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

// https://open.spotify.com/user/31cxj3tfn3orz53ctqpjmjwtmace?si=e115e0c390d04f1f -- Spotify
