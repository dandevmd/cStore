import { createSelector } from 'reselect'
import { CategoriesState } from '../reducers/categoryReducer/categoryReducer'
import { CategoryMap } from '../actions/categories/categoryActionType'


const selectCategoryReducer = (state): CategoriesState => state.categories

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories
)


export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories): CategoryMap =>
        categories.reduce((acc, category) => {
            const { title, items } = category
            acc[title.toLowerCase()] = items;
            return acc
        }, {} as CategoryMap))



export const selectCategoriesIsLoading = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.isLoading
)