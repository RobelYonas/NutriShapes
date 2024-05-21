import React, { createContext, useContext, useState, useEffect } from 'react';

const CalorieContext = createContext();

export const useCalories = () => {
    return useContext(CalorieContext);
};

export const CalorieProvider = ({ children }) => {
    const [totalCalories, setTotalCalories] = useState(0);
    const [totalProtein, setTotalProtein] = useState(0);
    const [totalFat, setTotalFat] = useState(0);
    const [calorieGoal, setCalorieGoal] = useState(2000); // Default value
    const [proteinTarget, setProteinTarget] = useState(0);
    const [fatTarget, setFatTarget] = useState(0);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            calculateTargets(user.weight, user.dietaryGoal);
        }
    }, []);

    const calculateTargets = (weight, dietaryGoal) => {
        let protein = 0;
        let fat = 0;
        let calories = 2000; // Default value

        switch (dietaryGoal) {
            case 'bulk':
                protein = 1.6 * weight; // Using the lower end of the range for simplicity
                fat = (3500 * 0.2) / 9; // 20% of a 3500 calorie diet for simplicity
                calories = 3500; // Calorie goal for bulking
                break;
            case 'cut':
                protein = 1.6 * weight; // Using the lower end of the range for simplicity
                fat = 0.5 * (weight * 2.20462); // Converting kg to lbs and using the lower end of the range
                calories = 1200; // Calorie goal for cutting
                break;
            case 'maintain':
                protein = 1.2 * weight; // Using the lower end of the range for simplicity
                fat = (1800 * 0.2) / 9; // 20% of a 1800 calorie diet for simplicity
                calories = 1800; // Calorie goal for maintaining
                break;
            default:
                break;
        }

        setProteinTarget(protein);
        setFatTarget(fat);
        setCalorieGoal(calories);
    };

    const addCalories = (calories) => {
        setTotalCalories((prevCalories) => prevCalories + calories);
    };

    const addProtein = (protein) => {
        setTotalProtein((prevProtein) => prevProtein + protein);
    };

    const addFat = (fat) => {
        setTotalFat((prevFat) => prevFat + fat);
    };

    return (
        <CalorieContext.Provider
            value={{
                totalCalories,
                addCalories,
                totalProtein,
                addProtein,
                totalFat,
                addFat,
                proteinTarget,
                fatTarget,
                calorieGoal,
                calculateTargets // Include calculateTargets in the context value
            }}
        >
            {children}
        </CalorieContext.Provider>
    );
};
