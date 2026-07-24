import React from 'react';
import { Link } from 'react-router-dom';
import { Play, BarChart2, Trash2, Award } from 'lucide-react';
import moment from 'moment';

const QuizCard = ({ quiz, onDelete }) => {
  return (
    <div className="group relative bg-white/80 backdrop-blur-xl border-2 border-slate-200 hover:border-emerald-500 rounded-2xl p-5 transition-all duration-300 flex flex-col gap-4 hover:shadow-xl hover:-translate-y-1">
      
      {/* Delete Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(quiz);
        }}
        className="absolute top-4 right-4 p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-colors z-10"
      >
        <Trash2 className="w-5 h-5" strokeWidth={2} />
      </button>

      <div className="flex flex-col gap-4 mt-2">
        {/* Status Badge */}
        <div className="flex items-center">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200">
            <Award className="w-4 h-4 text-emerald-600" strokeWidth={2.5} />
            <span className="text-sm font-semibold text-emerald-700">Score: {quiz?.score}</span>
          </div>
        </div>

        {/* Title & Date */}
        <div className="flex flex-col gap-1">
          <h3
            className="text-lg font-bold text-slate-800 line-clamp-1"
            title={quiz.title}
          >
            {quiz.title ||
              `Quiz - ${moment(quiz.createdAt).format("MMM D, YYYY")}`}
          </h3>

          <p className="text-sm font-medium text-slate-500">
            Created {moment(quiz.createdAt).format("MMM D, YYYY")}
          </p>
        </div>

        {/* Quiz Info */}
        <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
          <div className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg">
            <span className="text-sm font-semibold text-slate-700">
              {quiz.questions.length}{" "}
              {quiz.questions.length === 1
                ? "Question"
                : "Questions"}
            </span>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-2 pt-4 border-t border-slate-100">
          {quiz?.userAnswers?.length > 0 ? (
            <Link to={`/quizzes/${quiz._id}/results`}>
              <button className="group/btn w-full inline-flex items-center justify-center gap-2 h-11 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm rounded-xl transition-all duration-200 active:scale-95 cursor-pointer">
                <BarChart2 className="w-4 h-4" strokeWidth={2.5} />
                View Results
              </button>
            </Link>
          ) : (
            <Link to={`/quizzes/${quiz._id}`}>
              <button className="group/btn relative w-full h-11 bg-linear-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold text-sm rounded-xl transition-all duration-200 shadow-lg shadow-emerald-500/25 active:scale-95 overflow-hidden">
                
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Play className="w-4 h-4" strokeWidth={2.5} />
                  Start Quiz
                </span>

                {/* Hover Shine Effect */}
                <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizCard;