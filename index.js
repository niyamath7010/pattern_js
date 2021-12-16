function pattern(n) {
    let str=""
        for(i=0;i<n;i++){
            for(j=0;j<n-i;j++){
                str+="*"
            }
            for(k=0;k<i;k++){
                str+="-"
            }
            for(k=0;k<i;k++){
                str+="-"
            }
            for(j=0;j<n-i;j++){
                str+="*"
            }
            str+="\n"
        }
    return str;
}

// console.log(pattern(5));

// first part

function pattern(n) {
    let str="";
        for(i=1;i<=n;i++){
            for(j=0;j<i;j++){
                str+="*"
            }
            for(k=0;k<n-i;k++){
                str+="-"
            }
            for(j=0;j<n-i;j++){
                str+="-"
            }
            for(k=0;k<i;k++){
                str+="*"
            }
            str+="\n"
        }
    return str;
}

// console.log(pattern(5));

function final_pattern(n) {
    let str=""
        for(i=0;i<n;i++){
            for(j=0;j<n-i;j++){
                str+="*"
            }
            for(k=0;k<i;k++){
                str+="-"
            }
            for(k=0;k<i;k++){
                str+="-"
            }
            for(j=0;j<n-i;j++){
                str+="*"
            }
            str+="\n"
        }
        for(i=2;i<=n;i++){
            for(j=0;j<i;j++){
                str+="*"
            }
            for(k=0;k<n-i;k++){
                str+="-"
            }
            for(j=0;j<n-i;j++){
                str+="-"
            }
            for(k=0;k<i;k++){
                str+="*"
            }
            str+="\n"
        }

    return str;

}

console.log(final_pattern(9));