import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
   const [isEditing, setIsEditing] =useState(false);

    const saveExpenseDataHanler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData, 
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData)
        setIsEditing(false)
    };
    const stattEditingHandler = () => {
      setIsEditing(true);
    }
    const stopEditingHandler = () => {
      setIsEditing(false);
    }
  return (
    <div className="new-expense">
      
        {!isEditing && 
        <button onClick = {stattEditingHandler}>Add New Expense</button>}
        {isEditing && (
        <ExpenseForm 
        onSaveExpenseData = {saveExpenseDataHanler}
        onCancel = {stopEditingHandler} /> )}
      
    </div>
  );
};
export default NewExpense;
