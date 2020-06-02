//对一些方法的封装：axios，而且对一些访问结果进行了封装~~
import request from '@/utils/request'

export default {
  //1讲师列表，分页查询
  //这边的参数取决于你再后端写的参数
  //js的参数不用写类型
  getTeacherListPage(current,limit,teacherQuery){
    return request({
      url: `eduservice/teacher/pageTeacherCondition/${current}/${limit}`,
      method: 'post',
      // params
      //由于后端用的是requestBody获取的对象，所以不用params,而要用data获取数据
      data:teacherQuery
    })
  },
  //删除讲师
  deleteTeacherById(id){
    return request({
      url: `eduservice/teacher/${id}`,
      method: 'delete',

    })
  },
  //添加讲师
  addTeacher(teacher){
    return request({
      url: `eduservice/teacher/addTeacher`,
      method: 'post',
      data:teacher
    })
  },
  getTeacherInfo(id){
    return request({
      url: `eduservice/teacher/getTeacher/${id}`,
      method: 'get',
    })
  },
  updateTeacher(teacher) {
    return request({
      url: `eduservice/teacher/updateTeacher`,
      method: 'post',
      data:teacher
    })
  }
}

// export function getList(params) {
//   return request({
//     url: '/table/list',
//     method: 'get',
//     params
//   })
// }
