#include <stdio.h>
#include <stdlib.h>

/* Code for Stack Using Dynamic Memory Allocation */

int push(int arr[], int *ind, int size)
{
  if (*ind == size)
  {
    printf("\n\n==========> Memory is Overflow <===============\n\n");
    return 0;
  }

  int n;
  printf("Enter the Element: ");
  scanf("%d", &n);

  arr[*ind] = n;
  *ind = *ind + 1;

  return 1;
}

int pop(int arr[], int *ind, int size)
{
  if (*ind == 0)
  {
    printf("\n\n=====> Memory is underflow <=======\n ");
    return 0;
  }

  arr[*ind - 1] = '\0';
  *ind = *ind - 1;

  return 1;
}

int display(int arr[], int *ind, int size) {
  for (int i = 0; i < *ind; i++) {
    printf("%d ", arr[i]);
  }

  printf("\n");
  return 1;
}

void main()
{
  int size, num;
  printf("Enter the size of array : ");
  scanf("%d", &size);

  int *ptr = (int *)malloc(size * sizeof(int));
  int ind = 0;

  while (1)
  {
    printf("\n 1. for Push\n 2. for Pop\n 3. for Display\n 4. Quite\n Plz enter given number:");
    scanf("%d", &num);
    int flag = 0;

    switch (num)
    {
    case 1:
      push(ptr, &ind, size);
      break;

    case 2:
      pop(ptr, &ind, size);
      break;

    case 3:
      display(ptr, &ind, size);
      break;

    case 4:
      flag = 1;
      break;

    default:
      printf("\nPlz Enter one of the given number\n\n");
      break;
    }

    if (flag) {
      break;
    }
  }

  free(ptr);
}