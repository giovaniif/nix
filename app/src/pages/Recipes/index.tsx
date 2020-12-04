import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';

import Recipe from '../../components/Recipe';

import { Container, Title } from './styles';

interface IRecipes {
  name: string;
  image: string;
  carbs: string;
  fats: string;
  proteins: string;
  calories: string;
  portion: string;
  steps_to_prepare: string;
}

const Recipes: React.FC = ({ route }) => {
  const { level } = route.params;
  const [recipes, setRecipes] = useState<IRecipes[]>([]);

  useEffect(() => {
    let rec = []
    if (level === 'low') {
       rec = [
        {
          "name": "Vegan Bibimbap",
          "image": "https://www.eatingveganwithme.com/wp-content/uploads/2019/05/vegan-korean-bibimbap-1300x853.jpg",
          "carbs": "51g",
          "fats": "7g",
          "proteins": "19g",
          "calories": "464",
          "portion": "1 Bowl",
          "steps_to_prepare": "https://www.lazycatkitchen.com/vegan-bibimbap/"
      },
      {
          "name": "Steak Vegan",
          "image": "https://lovingitvegan.com/wp-content/uploads/2018/05/Vegan-Steak-17.jpghttps://www.eatingveganwithme.com/wp-content/uploads/2019/05/vegan-korean-bibimbap-1300x853.jpg",
          "carbs": "4g",
          "fats": "7g",
          "proteins": "20g",
          "calories": "167",
          "portion": "1 Steak",
          "steps_to_prepare": "https://lovingitvegan.com/vegan-steak/"
      },
      {
          "name": "Vegan Donuts",
          "image": "https://www.christinascucina.com/wp-content/uploads/2015/01/IMG_4471.jpg",
          "carbs": "40g",
          "fats": "9g",
          "proteins": "3g",
          "calories": "260",
          "portion": "1 Donut (78g)",
          "steps_to_prepare": "https://www.christinascucina.com/perfect-vegan-doughnuts-made-with-yeast-vegan-donut-recipe/"
      },
      {
          "name": "Vegan Stirfry",
          "image": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/seitan-and-black-bean-stir-fry-24c47ee.jpg?webp=true&quality=90&resize=500%2C454",
          "carbs": "0g",
          "fats": "0g",
          "proteins": "12g",
          "calories": "422",
          "portion": "1 Cup cooked",
          "steps_to_prepare": "https://www.bbcgoodfood.com/recipes/collection/vegan-stir-fry-recipes"
      },
      {
          "name": "Vegan Alfredo Sauce",
          "image": "https://minimalistbaker.com/wp-content/uploads/2015/06/CREAMY-delicious-Vegan-Aflredo-Pasta-9-ingredients-SIMPLE-methods-SO-delicious-vegan-pasta-recipe-dinner-minimalistbaker.jpg",
          "carbs": "4g",
          "fats": "5g",
          "proteins": "3g",
          "calories": "70",
          "portion": "61 g",
          "steps_to_prepare": "https://minimalistbaker.com/30-minute-vegan-alfredo-vegan-gf/"
      },
      ]
    } else if (level === 'mid') {
      rec = [
        {
          "name": "Vegan Pizza",
          "image": "https://madebychoices.pt/wp-content/uploads/2015/02/IMG_1711.jpg",
          "carbs": "42g",
          "fats": "9g",
          "proteins": "7g",
          "calories": "280",
          "portion": "1/3 Pizza",
          "steps_to_prepare": "https://madebychoices.pt/pizza-vegan-homemade-vegan-pizza/"
      },
      {
          "name": "Vegan Pancake",
          "image": "https://cookieandkate.com/images/2015/03/simple-vegan-pancakes-1-550x757.jpg",
          "carbs": "22g",
          "fats": "5g",
          "proteins": "3g",
          "calories": "149",
          "portion": "4 panquecas",
          "steps_to_prepare": "https://cookieandkate.com/simple-vegan-pancake-recipe/"   
      },
      {
          "name": "Vegan Cornbread",
          "image": "https://www.noracooks.com/wp-content/uploads/2018/03/IMG_5937.jpg",
          "carbs": "24g",
          "fats": "8g",
          "proteins": "3g",
          "calories": "184",
          "portion": "400 g",
          "steps_to_prepare": "https://www.noracooks.com/the-best-vegan-cornbread/"   
      },
      {
          "name": "Vegan Tofu Sandwich",
          "image": "https://www.ilovevegan.com/wp-content/uploads/2019/09/Smoky-Maple-Tofu-Sandwich-0660.jpg",
          "carbs": "28g",
          "fats": "13g",
          "proteins": "13g",
          "calories": "270",
          "portion": "198 g",
          "steps_to_prepare": "https://www.ilovevegan.com/smoky-maple-tofu-sandwich/"   
      },
      {
          "name": "Vegan Peedikotletid Vegan",
          "image": "https://veganmaailm.com/wp-content/uploads/2013/07/IMG_3863.jpg",
          "carbs": "3g",
          "fats": "8g",
          "proteins": "11g",
          "calories": "135",
          "portion": "198 g",
          "steps_to_prepare": "https://veganmaailm.com/2013/07/19/peedikotletid-2/"   
      },
      ]
    } else {
      rec = [
        {
          "name": "Vegan brownie",
          "image": "https://www.sweetestmenu.com/wp-content/uploads/2019/06/veganbrownies21b-650x951.jpg",
          "carbs": "24g",
          "fats": "0g",
          "proteins": "1g",
          "calories": "101",
          "portion": "58 g",
          "steps_to_prepare": "https://www.sweetestmenu.com/vegan-brownies/"   
      },
      {
          "name": "Hybrid Vegan Protein Supplement",
          "image": "https://www.everydayeasyeats.com/wp-content/uploads/2020/09/Vegan-Protein-Shake-1.jpg",
          "carbs": "5g",
          "fats": "2g",
          "proteins": "20g",
          "calories": "118",
          "portion": "28 g",
          "steps_to_prepare": "https://www.myfitnesspal.com/food/calories/hybrid-vegan-protein-supplement-689617250"
      },
      {
          "name": "Frozen Vegan Burger",
          "image": "https://recipehippie.com/wp-content/uploads/sites/19/2020/08/black-bean-burgers-17-e1598466341675.jpeg",
          "carbs": "7g",
          "fats": "2g",
          "proteins": "12g",
          "calories": "100",
          "portion": "1 Hambúrguer",
          "steps_to_prepare": "https://recipehippie.com/how-to-meal-prep-frozen-veggie-burgers/"  
      },
      {
          "name": "Vegan Cheese Slices",
          "image": "https://i1.wp.com/fullofplants.com/wp-content/uploads/2020/08/how-to-make-vegan-cheese-slices-that-melt-super-cheesy-from-fermented-tofu-chao-10.jpg?resize=1024%2C1536&ssl=1",
          "carbs": "5g",
          "fats": "2g",
          "proteins": "1g",
          "calories": "40",
          "portion": "1 Fatia",
          "steps_to_prepare": "https://recipehippie.com/how-to-meal-prep-frozen-veggie-burgers/"  
      }
      ]
    }

    setRecipes(rec);
  }, [level]);

  return (
    <Container>
      <Title>Temos algo para você</Title>
      <FlatList 
        data={recipes}
        keyExtractor={item => item.name}
        renderItem={({ item }) => <Recipe {...item} />}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}

export default Recipes;