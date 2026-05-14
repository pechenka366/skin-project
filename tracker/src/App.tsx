import { useMemo, useState } from 'react'
import './App.css'
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts'

export default function App() {
  const [selectedMonth] = useState('Июль 2026')

  const habits = [
    {
      name: 'Рисование',
      emoji: '🎨',
      streak: 12,
      progress: 78,
      completed: 23,
      color: '#22d3ee',
    },
    {
      name: 'Бег',
      emoji: '🏃',
      streak: 8,
      progress: 65,
      completed: 19,
      color: '#4ade80',
    },
    {
      name: 'Трейдинг',
      emoji: '📈',
      streak: 21,
      progress: 91,
      completed: 27,
      color: '#f59e0b',
    },
    {
      name: 'Глаза',
      emoji: '👀',
      streak: 5,
      progress: 43,
      completed: 11,
      color: '#a78bfa',
    },
  ]

  const monthlyData = [
    { day: '1', value: 2 },
    { day: '5', value: 4 },
    { day: '10', value: 3 },
    { day: '15', value: 4 },
    { day: '20', value: 1 },
    { day: '25', value: 4 },
    { day: '30', value: 3 },
  ]

  const pieData = habits.map((h) => ({
    name: h.name,
    value: h.completed,
    color: h.color,
  }))

  const calendar = useMemo(() => {
    return Array.from({ length: 31 }).map((_, i) => ({
      day: i + 1,
      completed: Math.floor(Math.random() * 5),
    }))
  }, [])

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-5xl font-black tracking-tight">
              Habit Tracker Pro
            </h1>

            <p className="text-zinc-400 mt-2 text-lg">
              Продвинутый трекер привычек и продуктивности
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 px-5 py-4 rounded-3xl">
            <p className="text-zinc-500 text-sm">Текущий месяц</p>
            <p className="text-2xl font-bold mt-1">{selectedMonth}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {habits.map((habit) => (
            <div
              key={habit.name}
              className="bg-zinc-900 rounded-3xl p-5 border border-zinc-800"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-4xl">{habit.emoji}</p>

                  <h2 className="text-2xl font-bold mt-3">
                    {habit.name}
                  </h2>
                </div>

                <button className="bg-emerald-500 hover:bg-emerald-400 transition px-4 py-2 rounded-2xl text-sm font-semibold">
                  + Выполнено
                </button>
              </div>

              <div className="mt-6">
                <div className="flex justify-between text-sm text-zinc-400 mb-2">
                  <span>Месячный прогресс</span>
                  <span>{habit.progress}%</span>
                </div>

                <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${habit.progress}%`,
                      background: habit.color,
                    }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-5">
                <div className="bg-zinc-800 rounded-2xl p-4">
                  <p className="text-zinc-500 text-xs">Стрик</p>
                  <p className="text-3xl font-black mt-1">
                    🔥 {habit.streak}
                  </p>
                </div>

                <div className="bg-zinc-800 rounded-2xl p-4">
                  <p className="text-zinc-500 text-xs">Выполнено</p>
                  <p className="text-3xl font-black mt-1">
                    {habit.completed}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2 bg-zinc-900 rounded-3xl border border-zinc-800 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold">
                  Календарь привычек
                </h2>

                <p className="text-zinc-400 mt-1">
                  Отмечай привычки по дням
                </p>
              </div>

              <button className="bg-cyan-500 px-5 py-3 rounded-2xl font-semibold">
                Добавить день
              </button>
            </div>

            <div className="grid grid-cols-7 gap-3">
              {calendar.map((item) => {
                const colors = [
                  'bg-zinc-800',
                  'bg-cyan-900',
                  'bg-cyan-700',
                  'bg-cyan-500',
                  'bg-cyan-300 text-black',
                ]

                return (
                  <div
                    key={item.day}
                    className={`rounded-2xl p-4 h-24 flex flex-col justify-between cursor-pointer hover:scale-105 transition ${colors[item.completed]}`}
                  >
                    <span className="font-bold">{item.day}</span>
                    <span className="text-xs opacity-80">
                      {item.completed}/4
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-6">
            <h2 className="text-3xl font-bold mb-6">
              Общая статистика
            </h2>

            <div className="space-y-4">
              <div className="bg-zinc-800 rounded-2xl p-4">
                <p className="text-zinc-500 text-sm">Лучший стрик</p>
                <h3 className="text-4xl font-black mt-1">🔥 21</h3>
              </div>

              <div className="bg-zinc-800 rounded-2xl p-4">
                <p className="text-zinc-500 text-sm">Выполнено за месяц</p>
                <h3 className="text-4xl font-black mt-1">80%</h3>
              </div>

              <div className="bg-zinc-800 rounded-2xl p-4">
                <p className="text-zinc-500 text-sm">Средняя продуктивность</p>
                <h3 className="text-4xl font-black mt-1">3.1/4</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-6 h-[420px]">
            <h2 className="text-3xl font-bold mb-6">
              График продуктивности
            </h2>

            <ResponsiveContainer width="100%" height="90%">
              <LineChart data={monthlyData}>
                <XAxis dataKey="day" stroke="#71717a" />
                <YAxis stroke="#71717a" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#22d3ee"
                  strokeWidth={4}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-6 h-[420px]">
            <h2 className="text-3xl font-bold mb-6">
              Распределение привычек
            </h2>

            <ResponsiveContainer width="100%" height="90%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  outerRadius={120}
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-6 h-[420px]">
          <h2 className="text-3xl font-bold mb-6">
            Сравнение привычек
          </h2>

          <ResponsiveContainer width="100%" height="90%">
            <BarChart data={habits}>
              <XAxis dataKey="name" stroke="#71717a" />
              <YAxis stroke="#71717a" />
              <Tooltip />
              <Bar dataKey="completed" fill="#22d3ee" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
