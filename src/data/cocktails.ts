// data/cocktails.ts
export interface Cocktail {
    id: number
    name: string
    price: number
    description: string
    image: string
    isSecret?: boolean  // 新增属性用于标识隐藏菜单
}

export const cocktails: Cocktail[] = [
    {
        id: 1,
        name: '长岛冰茶',
        price: 39.9,
        description: '五种烈酒的危险混合，带来无与伦比的迷醉感',
        image: 'https://images.unsplash.com/photo-1587223962930-cb7f31384c19?q=80&w=500&auto=format&fit=crop'
    },
    {
        id: 2,
        name: '金汤力',
        price: 19.9,
        description: '传统英式金酒与清爽汤力水的经典组合，柠檬点缀',
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=500&auto=format&fit=crop'
    },
    {
        id: 3,
        name: '龙舌兰日出',
        price: 19.9,
        description: '金色龙舌兰与鲜橙汁的完美融合，石榴糖浆沉淀形成绚丽日出层次',
        image: 'https://images.unsplash.com/photo-1560512823-829485b8bf18?q=80&w=500&auto=format&fit=crop'
    },
    {
        id: 4,
        name: '玛格丽特（纯饮）',
        price: 19.9,
        description: '经典纯饮酒，龙舌兰、青柠汁与橙味力娇酒的完美平衡，盐边增添风味',
        image: 'https://images.unsplash.com/photo-1556855810-ac404aa91e85?q=80&w=500&auto=format&fit=crop'
    }

]

// 隐藏菜单：只有懂行的客人才知道如何点
export const secretCocktails: Cocktail[] = [
    {
        id: 101,
        name: '学者密语',
        price: 199,
        description: '秘制配方，只为知道暗号的客人准备',
        image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=500&auto=format&fit=crop',
        isSecret: true
    },
    {
        id: 102,
        name: '禁忌之书',
        price: 299,
        description: '服务员不会告诉你配方，但保证让您体验前所未有的味觉旅程',
        image: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?q=80&w=500&auto=format&fit=crop',
        isSecret: true
    },
    {
        id: 103,
        name: '记忆漩涡',
        price: 365,
        description: '据说每个人喝完后的体验都不同，取决于内心深处的记忆',
        image: 'https://images.unsplash.com/photo-1551734413-5943d61e982f?q=80&w=500&auto=format&fit=crop',
        isSecret: true
    }
]