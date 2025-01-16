import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <SimpleGrid
      padding="10px"
      columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
      spacing={10}
    >
      {error && <Text>{error}</Text>}

      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
