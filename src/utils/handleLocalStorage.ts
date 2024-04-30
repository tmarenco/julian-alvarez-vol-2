import { GoalInterface } from "../interfaces/goal-interface";

export const getLocalStorage = (): GoalInterface[] => {
    const storage = localStorage.getItem("favoriteGoals");
    return storage ? JSON.parse(storage) : []
}


export const setLocalStorage = (favoriteGoals: GoalInterface[], goal: GoalInterface): void => {
    const updatedFavoriteGoals = [...favoriteGoals];
    const isFavoriteIndex = updatedFavoriteGoals.findIndex(
      (favorite) => favorite.order === goal.order
    );
    isFavoriteIndex !== -1
      ? updatedFavoriteGoals.splice(isFavoriteIndex, 1)
      : updatedFavoriteGoals.push(goal);
    localStorage.setItem("favoriteGoals", JSON.stringify(updatedFavoriteGoals));
}
