import api from './api'
import { blogs } from './constants'

export function retrieveBlogs(from){
    return dispatch => dispatch({
                        type: blogs.RECEIVE_ALL,
                        blogs: [{id:1,
                                 title:"Introduction to React",
                                 createdTime: new Date().toString(),
                                 tags:["React","Front end","Programming and technology","Introduction", "Learning", "Redux"],
                                 markdown:"#### 钱塘江浩浩江水，日日夜夜无穷无尽的从临安牛家村边绕过，东流入海。江畔一排数十株乌柏树，叶子似火烧般红，正是八月天时。村前村后的野草刚起始变黄，一抹斜阳映照之下，更增了几分萧索。两株大松树下围着一堆村民，男男女女和十几个小孩，正自聚精会神的听着一个瘦削的老者说话。\n"
                                    + "##### 那说话人五十来岁年纪，一件青布长袍早洗得褪成了蓝灰色。只听他两片梨花木板碰了几下，右手中竹棒在一面小羯鼓上敲起得得连声。唱道：\n"
                                    + "##### 那说话人五十来岁年纪，一件青布长袍早洗得褪成了蓝灰色。只听他两片梨花木板碰了几下，右手中竹棒在一面小羯鼓上敲起得得连声。唱道：\n"
                                    + "##### 那说话人五十来岁年纪，一件青布长袍早洗得褪成了蓝灰色。只听他两片梨花木板碰了几下，右手中竹棒在一面小羯鼓上敲起得得连声。唱道：\n"
                                    + "##### 那说话人五十来岁年纪，一件青布长袍早洗得褪成了蓝灰色。只听他两片梨花木板碰了几下，右手中竹棒在一面小羯鼓上敲起得得连声。唱道：\n"
                                    + "##### 那说话人五十来岁年纪，一件青布长袍早洗得褪成了蓝灰色。只听他两片梨花木板碰了几下，右手中竹棒在一面小羯鼓上敲起得得连声。唱道：\n"
                                    + "##### 那说话人五十来岁年纪，一件青布长袍早洗得褪成了蓝灰色。只听他两片梨花木板碰了几下，右手中竹棒在一面小羯鼓上敲起得得连声。唱道：\n"
                                    + "![alt text](http://img2.timeinc.net/people/i/2009/database/bradleycooper/bradley-cooper-300.jpg 'Logo Title Text 1') \n"
                                    + "<pre class='prettyprint'> public class Person{} </pre>\n"
                                    + "<pre class='prettyprint'> const let s = 'JavaScript syntax highlighting'; alert(s); </pre>\n",
                                 comments:[{
                                    id:1,
                                    name:"Jing Guo",
                                    createdTime: new Date().toString(),
                                    centent:"This is funny"
                                 },
                                 {
                                     id:2,
                                     name:"Xiao Tong",
                                     createdTime: new Date().toString(),
                                     centent:"This is not funny"
                                  }
                                 ]
                                }]
                            })
}

export function getBlog(id){
    return dispatch => dispatch({
                type: blogs.RECEIVE,
                blog: {id:1,
                        title:"Introduction to React",
                        createdTime: new Date().toString(),
                        tags:["React","Front end","Programming and technology","Introduction", "Learning", "Redux"],
                        markdown:"#### 钱塘江浩浩江水，日日夜夜无穷无尽的从临安牛家村边绕过，东流入海。江畔一排数十株乌柏树，叶子似火烧般红，正是八月天时。村前村后的野草刚起始变黄，一抹斜阳映照之下，更增了几分萧索。两株大松树下围着一堆村民，男男女女和十几个小孩，正自聚精会神的听着一个瘦削的老者说话。\n"
                          + "##### 那说话人五十来岁年纪，一件青布长袍早洗得褪成了蓝灰色。只听他两片梨花木板碰了几下，右手中竹棒在一面小羯鼓上敲起得得连声。唱道：\n"
                          + "##### 那说话人五十来岁年纪，一件青布长袍早洗得褪成了蓝灰色。只听他两片梨花木板碰了几下，右手中竹棒在一面小羯鼓上敲起得得连声。唱道：\n"
                          + "##### 那说话人五十来岁年纪，一件青布长袍早洗得褪成了蓝灰色。只听他两片梨花木板碰了几下，右手中竹棒在一面小羯鼓上敲起得得连声。唱道：\n"
                          + "##### 那说话人五十来岁年纪，一件青布长袍早洗得褪成了蓝灰色。只听他两片梨花木板碰了几下，右手中竹棒在一面小羯鼓上敲起得得连声。唱道：\n"
                          + "##### 那说话人五十来岁年纪，一件青布长袍早洗得褪成了蓝灰色。只听他两片梨花木板碰了几下，右手中竹棒在一面小羯鼓上敲起得得连声。唱道：\n"
                          + "##### 那说话人五十来岁年纪，一件青布长袍早洗得褪成了蓝灰色。只听他两片梨花木板碰了几下，右手中竹棒在一面小羯鼓上敲起得得连声。唱道：\n"
                          + "![alt text](http://img2.timeinc.net/people/i/2009/database/bradleycooper/bradley-cooper-300.jpg 'Logo Title Text 1') \n"
                          + "<pre class='prettyprint'> public class Person{} </pre>\n"
                          + "<pre class='prettyprint'> const let s = 'JavaScript syntax highlighting'; alert(s); </pre>\n",
                        comments:[{
                                  id:1,
                                  name:"Jing Guo",
                                  createdTime: new Date().toString(),
                                  centent:"This is funny"
                                },
                                {
                                   id:2,
                                   name:"Xiao Tong",
                                   createdTime: new Date().toString(),
                                   centent:"This is not funny"
                                }]
                        }
            })
}
