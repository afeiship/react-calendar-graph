# docker-aws
> Docker for aws cli.

## usage
```shell
# basic usage
docker run --rm -it -v ~/.aws:/root/.aws amazon/aws-cli [command]

# alias aws
alias aws='docker run --rm -it amazon/aws-cli'
alias aws='docker run --rm -it -v ~/.aws:/root/.aws -v $(pwd):/aws amazon/aws-cli'
```
