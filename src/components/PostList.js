import React, { Component } from 'react';

import PostItem from './PostItem';

class PostList extends Component {
    state = {
        posts: [
          {
            id: 1,
            author: {
              name: "Julio Alcantara",
              avatar: require('../assets/avatar1.png')
            },
            date: "04 Jun 2019",
            content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
            comments: [
              {
                id: 1,
                author: {
                  name: "Diego Fernandes",
                  avatar: require('../assets/avatar-00.png')
                },
                content: "Diego Fernandes A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
              }
            ]
          },
          {
            id: 2,
            author: {
                name: "Carlos Bruno",
                avatar: require('../assets/avatar2.jpg')
            },
            date: "24 Nov 2019",
            content: "Pessoal da RocketSeat, tive que apelar para o CSS. Consultei a publicação de vocês, algum problema?",
            comments: [
                {
                  id: 1,
                  author: {
                    name: "Diego Fernandes",
                    avatar: require('../assets/avatar-00.png')
                  },
                  content: "Nenhum problema Carlos, importante é você entender o que cada atributo faz."
                }
            ]
          }
        ]
      };

      render() {
        // const { posts } = this.state;

        return (
            <div className="PostList">
              {this.state.posts.map(post => ( <PostItem key={post.id} {...post} />))}  
            </div>
          )
      }
}

export default PostList;