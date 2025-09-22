import Layout from "../pages/Layout";
import { Target, Award, Plus } from "lucide-react";
import { useState } from "react";

export default function Goals() {
  const [achievements, setAchievements] = useState([
    { id: 1, name: "Съесть 5 порций овощей", completed: true, emoji: "🥦" },
    { id: 2, name: "Выпить 2 литра воды", completed: false, emoji: "💧" },
    { id: 3, name: "Приготовить новое блюдо", completed: true, emoji: "🍳" },
    { id: 4, name: "Не выбрасывать еду 3 дня", completed: false, emoji: "♻️" },
  ]);

  const [userGoals, setUserGoals] = useState([
    { id: 101, name: "Похудеть на 5 кг", completed: false },
    { id: 102, name: "Готовить дома 5 раз в неделю", completed: true },
  ]);

  const toggleAchievement = (id) => {
    setAchievements(achievements.map(ach => ach.id === id ? { ...ach, completed: !ach.completed } : ach));
  };

  const toggleUserGoal = (id) => {
    setUserGoals(userGoals.map(goal => goal.id === id ? { ...goal, completed: !goal.completed } : goal));
  };

  const addCustomGoal = () => {
    const newGoalText = prompt("Введите новую цель:");
    if (newGoalText) {
      setUserGoals([...userGoals, { id: Date.now(), name: newGoalText, completed: false }]);
    }
  };

  return (
    <Layout>
      <div className="p-6">
        <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
          <Target className="w-8 h-8 text-purple-600" />
          Мои Цели и Ачивки
        </h2>

        {/* Ачивки от сайта */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-6 mb-8">
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-yellow-500" />
            Ачивки FridgeApp
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map(ach => (
              <div 
                key={ach.id} 
                className={`flex items-center gap-3 p-4 rounded-xl transition-all duration-200 cursor-pointer ${
                  ach.completed ? 'bg-green-50' : 'bg-slate-50'
                }`}
                onClick={() => toggleAchievement(ach.id)}
              >
                <span className="text-3xl">{ach.emoji}</span>
                <span className={`font-medium ${ach.completed ? 'text-green-700' : 'text-slate-700'}`}>
                  {ach.name}
                </span>
                {ach.completed && <Award className="w-5 h-5 text-yellow-500 ml-auto" />}
              </div>
            ))}
          </div>
        </div>

        {/* Пользовательские цели */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-6">
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-600" />
            Мои Пользовательские Цели
          </h3>
          <div className="space-y-4 mb-4">
            {userGoals.map(goal => (
              <div 
                key={goal.id} 
                className={`flex items-center gap-3 p-4 rounded-xl transition-all duration-200 cursor-pointer ${
                  goal.completed ? 'bg-blue-50' : 'bg-slate-50'
                }`}
                onClick={() => toggleUserGoal(goal.id)}
              >
                <span className={`w-5 h-5 rounded-full border-2 ${
                  goal.completed ? 'border-blue-500 bg-blue-500' : 'border-slate-300'
                }`} />
                <span className={`font-medium ${goal.completed ? 'text-blue-700 line-through' : 'text-slate-700'}`}>
                  {goal.name}
                </span>
              </div>
            ))}
          </div>
          <button 
            onClick={addCustomGoal}
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-colors flex items-center justify-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Добавить новую цель
          </button>
        </div>
      </div>
    </Layout>
  );
}

