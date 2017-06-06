import { resultOK } from 'api/utils'
import { getProjectsAPI } from 'api/ProjectsSvc'

// define action types
export const GET_PROJECTS_SUCCESS = 'GET_PROJECTS_SUCCESS'
export const GET_PROJECTS_FAIL = 'GET_PROJECTS_FAIL'

export const GET_PROJECTS = async () => {
  let result = await getProjectsAPI()
  if (!resultOK(result)) {
    return { type: GET_PROJECTS_FAIL, error: result.data }
  }
  return { type: GET_PROJECTS_SUCCESS, result: result.data }
}
