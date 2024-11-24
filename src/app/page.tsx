import { Center, Image, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
      <main>
        <Center>
          <Image
            alt="welcome to all things rick and morty"
            src="https://cdn.leonardo.ai/users/97e0e69b-ffe2-4d7f-8422-2062341e42b1/generations/07defe95-f360-40d7-97c4-c9e96b0f4803/Leonardo_Phoenix_the_image_is_about_rick_and_morty_but_it_shou_3.jpg"
          ></Image>
        </Center>
      </main>
      <footer>
        <Center>
          <Text textStyle="xs">Pickle rick</Text>
        </Center>
      </footer>
    </div>
  );
}
